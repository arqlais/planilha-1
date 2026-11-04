/* Apresentação sem internet: dados de exemplo do PassosFit (nomes e números inventados).
   Grava só neste computador, uma vez. O botão "Recomeçar" do menu apaga e cria de novo. */
(function () {
  var KEY = 'apres-planilha-treino-v1', FLAG = 'apres-pf-apresentacao-v1';
  /* link do menu "como aluno": abre direto o app de um aluno de exemplo */
  try {
    var q = new URLSearchParams(location.search), al = q.get('aluno'), pr = q.get('professor');
    if (al || pr) {
      window.PF_ALUNO = al || '';
      localStorage.setItem('apres-planilha-treino-ui', JSON.stringify(al ? { view: 'treino', profile: al, studentMode: true } : { view: 'painel', profile: 'me', studentMode: false }));
      localStorage.setItem('apres-pf-entrou', '1');
      history.replaceState(null, '', location.pathname);
    }
  } catch (e) {}
  try { if (localStorage.getItem(FLAG) && localStorage.getItem(KEY)) return; } catch (e) { return; }
  var n = 0; var uid = function () { n++; return 'd' + n.toString(36) + Math.random().toString(36).slice(2, 7); };
  var pad = function (x) { return String(x).padStart(2, '0'); };
  var iso = function (d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
  var now = new Date(); now.setHours(12, 0, 0, 0);
  var day = function (off) { var d = new Date(now); d.setDate(d.getDate() + off); return d; };
  var rnd = (function () { var s = 7; return function () { s = (s * 16807) % 2147483647; return s / 2147483647; }; })();
  var r25 = function (v) { return Math.round(v / 2.5) * 2.5; };

  var db = { profiles: [], exercises: [], sessions: [], cardio: [], letters: true, seeded: ['lais'] };

  /* treinos: [id, nome, [[grupo, exercício, carga inicial, reps, séries, peso do corpo?]]] */
  var A = ['A', 'Treino A · Peito e tríceps', [['Peito', 'Supino reto', 30, 10, 4], ['Peito', 'Supino inclinado com halteres', 14, 10, 3], ['Peito', 'Crucifixo máquina', 35, 12, 3], ['Tríceps', 'Tríceps corda', 20, 12, 3], ['Tríceps', 'Tríceps francês', 12, 12, 3], ['Abdômen', 'Abdominal supra', null, 15, 3]]];
  var B = ['B', 'Treino B · Costas e bíceps', [['Costas', 'Puxada frontal', 40, 10, 4], ['Costas', 'Remada baixa', 40, 10, 3], ['Costas', 'Remada curvada', 30, 10, 3], ['Bíceps', 'Rosca direta', 20, 10, 3], ['Bíceps', 'Rosca martelo', 10, 12, 3]]];
  var C = ['C', 'Treino C · Pernas e ombros', [['Quadríceps', 'Agachamento livre', 30, 10, 4], ['Quadríceps', 'Leg press 45', 100, 12, 4], ['Posteriores', 'Mesa flexora', 30, 12, 3], ['Glúteos', 'Elevação pélvica', 40, 12, 3], ['Panturrilha', 'Panturrilha em pé', 40, 15, 3], ['Ombros', 'Desenvolvimento com halteres', 12, 10, 3], ['Ombros', 'Elevação lateral', 6, 12, 3]]];

  /* alunos inventados: nome, escala das cargas, dias da semana (0=dom), assiduidade, semanas no app, metas */
  var people = [
    { id: 'me', name: 'Igor Pedro', k: 2, days: { 1: ['A'], 2: ['B'], 3: ['C'], 4: ['A'], 5: ['B'] }, hit: .92, weeks: 12, cardio: 'corrida' },
    { id: 'demo-ana', name: 'Ana Ribeiro', k: .7, days: { 1: ['A'], 3: ['B'], 5: ['C'] }, hit: .9, weeks: 10, cardio: 'escada', body: [62, 165, 27] },
    { id: 'demo-bruno', name: 'Bruno Carvalho', k: 1.6, days: { 1: ['A'], 2: ['B'], 4: ['C'], 5: ['A'] }, hit: .85, weeks: 9, cardio: 'corrida', body: [84, 178, 31] },
    { id: 'demo-carla', name: 'Carla Menezes', k: .8, days: { 2: ['A'], 4: ['B'], 6: ['C'] }, hit: .75, weeks: 8, cardio: 'bicicleta', body: [70, 160, 42] },
    { id: 'demo-diego', name: 'Diego Martins', k: 1.3, days: { 1: ['A'], 3: ['B'], 5: ['C'] }, hit: .6, weeks: 6, cardio: 'eliptico', body: [92, 182, 35] },
    { id: 'demo-julia', name: 'Júlia Fernandes', k: .6, days: { 1: ['C'], 3: ['A'], 5: ['B'] }, hit: .95, weeks: 4, cardio: 'corrida', body: [55, 158, 22] }
  ];

  people.forEach(function (pp, pi) {
    var since = iso(day(-7 * pp.weeks));
    var p = { id: pp.id, name: pp.name, workouts: [], division: {}, since: since, messages: [], cardioDaily: 20 };
    if (pp.id !== 'me') {
      p.billing = { plan: pi % 2 ? 'Mensal' : 'Trimestral', value: pi % 2 ? 150 : 400, due: 5 + pi * 3, active: true };
      p.payments = {}; var ym = iso(now).slice(0, 7); if (pi !== 4) p.payments[ym] = { date: iso(day(-3 - pi)), method: 'Pix', value: p.billing.value };
      p.messages = [{ date: iso(day(-2)), text: 'Bom treino essa semana! Capriche na descida do movimento.' }];
    }
    [A, B, C].forEach(function (w) { p.workouts.push({ id: w[0], name: w[1] }); });
    for (var d in pp.days) p.division[d] = pp.days[d].concat(['Cardio']);
    db.profiles.push(p);

    var exs = {};
    [A, B, C].forEach(function (w) {
      w[2].forEach(function (x) {
        var c0 = x[2] == null ? null : Math.max(2, r25(x[2] * pp.k));
        var ex = { id: uid(), profileId: p.id, group: x[0], letter: w[0], name: x[1], sets: [] };
        for (var i = 0; i < x[4]; i++) ex.sets.push({ carga: c0, reps: x[3] });
        ex.c0 = c0; ex.r0 = x[3];
        db.exercises.push(ex); (exs[w[0]] = exs[w[0]] || []).push(ex);
      });
    });

    /* histórico: cada dia de treino da semana, desde o início até ontem, com carga subindo aos poucos */
    var start = -7 * pp.weeks, peso = pp.body ? pp.body[0] : null, bodyN = 0;
    for (var off = start; off <= 0; off++) {
      var dt = day(off), ws = pp.days[dt.getDay()];
      if (off === 0) { if (pi !== 1 && pi !== 2) continue; ws = ws || ['A']; dt = new Date(); dt.setHours(Math.max(0, Math.min(dt.getHours(), 9) - 1 + pi), 10); }
      else if (!ws || rnd() > pp.hit) continue;
      var wk = Math.floor((off - start) / 7), date = iso(dt);
      ws.forEach(function (L) {
        (exs[L] || []).forEach(function (ex) {
          var up = ex.c0 == null ? null : r25(ex.c0 * (1 + 0.035 * wk));
          var sets = ex.sets.map(function (s, i) {
            return { carga: up == null ? null : Math.max(2, up + (i ? 2.5 * Math.min(i, 2) : 0)), reps: Math.max(6, ex.r0 - (i > 1 ? 1 : 0) + (rnd() < .3 ? 1 : 0)), done: true };
          });
          db.sessions.push({ id: uid(), exId: ex.id, date: date, sets: sets, fin: dt.toISOString(), by: 'aluno' });
        });
      });
      if (rnd() < .8) db.cardio.push({ id: uid(), profileId: p.id, date: date, mode: pp.cardio, min: 15 + Math.round(rnd() * 15), at: dt.toISOString(), goal: 20 });
    }
    /* ficha atual = última carga usada */
    db.exercises.forEach(function (ex) {
      if (ex.profileId !== p.id) return;
      var last = db.sessions.filter(function (s) { return s.exId === ex.id; }).pop();
      if (last) ex.sets = last.sets.map(function (s) { return { carga: s.carga, reps: s.reps }; });
      delete ex.c0; delete ex.r0;
    });
    /* medidas do corpo: uma avaliação por mês */
    if (pp.body) {
      p.body = [];
      for (var m = Math.floor(pp.weeks / 4); m >= 0; m--) {
        var k = Math.floor(pp.weeks / 4) - m, cint = 70 + pp.body[0] * .2 - k * 1.2;
        p.body.push({ id: uid(), date: iso(day(-28 * m - 1)), peso: Math.round((pp.body[0] - k * 1.1) * 10) / 10, altura: pp.body[1], idade: pp.body[2],
          cintura: Math.round(cint * 10) / 10, abdomen: Math.round((cint + 6) * 10) / 10, quadril: Math.round((pp.body[0] * .3 + 72) * 10) / 10,
          bracoD: Math.round((26 + pp.k * 4 + k * .4) * 10) / 10, bracoE: Math.round((25.7 + pp.k * 4 + k * .4) * 10) / 10,
          coxaD: Math.round((50 + pp.k * 5 + k * .3) * 10) / 10, coxaE: Math.round((49.6 + pp.k * 5 + k * .3) * 10) / 10 });
      }
    }
  });

  try {
    localStorage.setItem(KEY, JSON.stringify(db));
    localStorage.setItem(FLAG, '1');
    localStorage.setItem('apres-pf-entrou', '1');
    if (!window.PF_ALUNO && window.PF_ALUNO !== '') localStorage.removeItem('apres-planilha-treino-ui');
  } catch (e) {}
})();
