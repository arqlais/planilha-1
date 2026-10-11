# PassosFit: anotações para o Claude

Leia antes de qualquer tarefa. Este repositório é **público**: nunca coloque aqui nomes, dados ou backups de alunos.

## Quem pede e como responder
- O dono é o professor (personal trainer) **Igor Pedro**. Não é programador.
- Responda sempre em **português simples**, curto e direto. Nada de termos técnicos. Texto longo cansa: vá ao ponto.
- Ele não gosta da expressão "treino pago" (nas artes usamos "Treino feito" / "Check-in").
- Depois de mudar o app, diga o que mudou e lembre: "feche e abra o app para ver".

## O app
- PWA de arquivo único: `index.html` (todo o app), `sw.js` (cache offline), `manifest.webmanifest`, `config.js` (Firebase), `firestore.rules`.
- No ar pelo GitHub Pages, branch `claude/sharp-gauss-tw16z1`, domínio **passosfit.com.br** (arquivo `CNAME`).
- Nuvem: Firebase Auth + Firestore (projeto `treino-8a1e0`). O professor é o administrador (e-mail em `config.js`).
  Mudou `firestore.rules`? O Igor precisa colar o texto no console do Firebase; avise e mande o texto.
- Dados: `profiles/{pid}` (aluno, treinos, exercícios) e `profiles/{pid}/months/{AAAA-MM}` (séries e cardio).
  Documentos especiais em months: `prefs` (preferências e respostas do aluno nos recados), `own` (treinos montados pelo aluno), `body` (medidas).
- Ajustes únicos de dados: função `fixOnce()`, cada ajuste marcado em `profile(ME).fixes`.

## Visual novo (desenho "Passos Fit 2.0", feito pela esposa do Igor)
- Vale para todos. Liga com `data-skin="v2"` no `<html>`; `skinOn()` diz se está ligado. O professor pode desligar só no aparelho dele (Configurações).
- Código do visual novo: funções e classes com prefixo `v2` (ex.: `renderStudentTreinoV2`, `cardHtmlV2`, `renderPainelV2`), bonequinhos animados em `PFA`, artes do treino feito em `PFP`.
- As telas novas usam os mesmos dados e os mesmos botões (`data-act`) das telas antigas: só muda o desenho.
- `novo.html` é a prévia original dela (só leitura), aberta pelo professor em Configurações.

## Como publicar uma mudança
1. `git pull --ff-only origin claude/sharp-gauss-tw16z1` antes de começar.
2. Teste no navegador (Playwright, já instalado): rode os testes a partir do scratchpad, nunca grave prints dentro do repositório.
3. `./bump-version.sh` antes de cada commit (faz o app avisar que tem versão nova).
4. Commit com descrição em português e push para a mesma branch.

## Pendências (o Igor pode pedir)
- Biblioteca de exercícios no desenho dela (bonequinhos + "como fazer").
- Mural da turma (precisa de regra nova no Firebase).
- Telas Montar treino, Histórico e Evolução ainda com a arrumação antiga (já com as cores novas).
- Segurança: tirar `PENDENCIAS.md` e prints antigos do repositório público, tirar nomes de alunos do código (`fixOnce`), limitar a coleção `visits` nas regras.
- Perguntas sobre CNPJ / empresa: ver `PENDENCIAS.md` (já foram respondidas em outra conversa, projeto "Primeiro Passo").
