/* Guarda o site no aparelho para abrir sem internet.
   Página: rede primeiro (sempre a versão mais nova), cópia salva se estiver offline.
   Fontes e biblioteca de ícones: cópia salva primeiro. */
const CACHE = "primeiropasso-v28"; /* o PassosFit mora no mesmo site: só apaga cópias do Primeiro Passo */
const CORE = ["./", "./index.html", "./vendor/lucide-pp.js?v=1", "./vendor/firebase-10.14.1/firebase-app-compat.js", "./vendor/firebase-10.14.1/firebase-auth-compat.js", "./vendor/firebase-10.14.1/firebase-firestore-compat.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("primeiropasso") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const external = /(fonts\.googleapis\.com|fonts\.gstatic\.com|cdn\.jsdelivr\.net)$/.test(url.hostname);
  /* bibliotecas do próprio site (ícones e login): têm versão no nome, então a cópia guardada vale (abre mais rápido) */
  const lib = url.origin === location.origin && /\/primeiro-passo\/vendor\//.test(url.pathname);
  /* só a página principal é guardada como index.html; outras páginas (ex.: trabalho/) ficam com o próprio endereço */
  const home = req.mode === "navigate" && new URL("./", self.registration.scope).pathname === url.pathname.replace(/index\.html$/, "");
  if (req.mode === "navigate" || url.origin === location.origin && !external && !lib) {
    e.respondWith(fetch(req).then(r => {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(home ? "./index.html" : req, copy)); return r;
    }).catch(() => caches.match(home ? "./index.html" : req).then(r => r || caches.match("./index.html"))));
  } else if (external || lib) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r;
    })));
  }
});
