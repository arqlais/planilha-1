// PassosFit: guarda o app no aparelho para abrir e anotar o treino sem internet.
// Página e configuração: busca na internet primeiro (para pegar a versão nova) e, sem internet, usa a cópia guardada.
// Arquivos que não mudam (Firebase, ícones): usa a cópia guardada.
const CACHE = 'passosfit-v4'; // nome novo: apaga a cópia antiga (página sempre da internet, sem cópia velha do navegador)
const FILES = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'icon-v2-192.png', 'icon-v2-512.png', 'apple-touch-icon-v2.png', 'fonts/archivo.woff2', 'fonts/manrope.woff2', 'fonts/outfit.woff2', 'fonts/unbounded.woff2', 'fonts/spacemono-400.woff2', 'fonts/spacemono-700.woff2', 'brand/logo-i.svg', 'brand/logo-i-escuro.svg', 'vendor/qrcode.js',
  'vendor/firebase/firebase-app-compat.js', 'vendor/firebase/firebase-auth-compat.js', 'vendor/firebase/firebase-firestore-compat.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
// o Primeiro Passo mora no mesmo site: só apaga as cópias antigas do PassosFit
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('passosfit') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return; // Firebase (nuvem) cuida de si mesmo
  if (url.pathname.endsWith('version.json')) return; // sempre da internet
  if (/^\/(portal|primeiro-passo)\//.test(url.pathname.slice(new URL(self.registration.scope).pathname.length - 1))) return; // portal e Primeiro Passo: nunca guardados como o app (o Primeiro Passo tem a própria cópia)
  const isPage = req.mode === 'navigate' || /\/(index\.html)?$/.test(url.pathname) || url.pathname.endsWith('config.js');
  if (url.pathname.endsWith('config.js')) { // configuração quase nunca muda: abre na hora com a cópia guardada e atualiza a cópia por trás
    const net = fetch(req.url, { cache: 'no-store', credentials: 'same-origin' }).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; });
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || net));
    e.waitUntil(net.catch(() => {}));
    return;
  }
  if (isPage) { // só a página principal fica guardada como o app (novo.html não substitui)
    const key = /\/(index\.html)?$/.test(url.pathname) ? './' : req;
    const net = fetch(req.url, { cache: 'no-store', credentials: 'same-origin' }).then(res => { // sem a cópia de 10 min do navegador: celular pega a versão nova na hora
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key, copy)); }
      return res;
    });
    const saved = () => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./'));
    // internet fraca (academia): se a página não chegar em 3 s, abre a cópia guardada no celular.
    // A versão nova continua baixando e fica guardada para a próxima vez (e o app avisa que tem versão nova).
    const slow = new Promise(ok => setTimeout(ok, 3000)).then(saved).then(r => r || net);
    e.respondWith(Promise.race([net.catch(saved), slow]).catch(saved).then(r => r || net));
    e.waitUntil(net.catch(() => {}));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
