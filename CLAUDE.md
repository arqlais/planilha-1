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

## Tarefas e publicação: sempre por Issue + PR (vale para qualquer agente, de qualquer modelo)
1. **Toda tarefa vira uma Issue** no GitHub antes de começar, com o tipo no título e na etiqueta:
   `[Correção]` (algo quebrado), `[Melhoria]` (algo que já existe ficar melhor) ou `[Nova função]` (algo novo).
   Procure antes se já existe uma Issue igual. Texto curto, em português simples: o que acontece hoje e o que deve acontecer.
2. Trabalhe numa **branch separada**, criada a partir de `claude/sharp-gauss-tw16z1` (`git pull --ff-only` antes).
   Nunca faça push direto em `claude/sharp-gauss-tw16z1`: ela é o site no ar.
3. Teste no navegador (Playwright, já instalado): rode os testes a partir do scratchpad, nunca grave prints dentro do repositório.
   Mudou `firestore.rules`? Teste as regras no emulador do Firebase antes.
4. `./bump-version.sh` antes do commit (faz o app avisar que tem versão nova). Commit com descrição em português.
5. **Abra um PR** para `claude/sharp-gauss-tw16z1`. A descrição **cita a Issue** (`Resolve #12`), explica em linguagem simples
   o que muda para o professor e os alunos, e diz se o Igor precisa colar regras novas no Firebase.
6. **Nada vai para o ar sem o Igor aprovar e juntar o PR.** Quando ele junta, o site atualiza sozinho e a Issue fecha.

## Pendências (o Igor pode pedir)
- Biblioteca de exercícios no desenho dela (bonequinhos + "como fazer").
- Mural da turma (precisa de regra nova no Firebase).
- Telas Montar treino, Histórico e Evolução ainda com a arrumação antiga (já com as cores novas).
- Veja as Issues abertas no GitHub: é lá que ficam as tarefas para depois.
- Perguntas sobre CNPJ / empresa ficam fora do repositório, nas notas do projeto (já foram respondidas em outra conversa, projeto "Primeiro Passo").

## Segurança (repositório público)
- Nada de nomes de alunos, dados, backups, prints ou anotações pessoais no código ou em arquivos. Ajustes em `fixOnce()` que citem um aluno: depois que rodarem, apague o trecho.
- A chave do Firebase em `config.js` é pública por natureza; quem protege os dados são as regras (`firestore.rules`). Toda coleção nova precisa de regra; o que não tem regra fica fechado.
- Texto que vem do usuário vai para a tela sempre com `esc()`.
