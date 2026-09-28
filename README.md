# Planilha de Treino

> Para professores: tem uma área para o **seu treino particular** e uma para **acompanhar cada aluno**.

App simples (um único arquivo `index.html`) para registrar treinos de musculação, separado por grupo muscular: **Costas, Peito, Ombros, Pernas e Braços**.

## Como usar

1. Abra o `index.html` no navegador (celular ou computador). Para usar no celular, ative o **GitHub Pages** do repositório (Settings → Pages → branch principal) e salve o link na tela inicial.
2. Escolha o grupo muscular. Use **‹ ›** para ir para outros dias (ou toque na data no topo).
3. Cada exercício já vem preenchido com as cargas e repetições do **último treino**. As séries aparecem em **quadrados** (carga em cima, repetições embaixo e o valor do treino anterior); digite e toque em **✓** em cada série feita. Em **☰ Lista** voltam os botões **− / +**.
4. O total (carga × repetições) é somado automaticamente.
5. Ao marcar uma série, abre um **timer de descanso** de 2 minutos (ajuste com −15s / +15s; o app lembra o tempo preferido).
6. Ao concluir um exercício superando o treino anterior, aparece a comemoração de **recorde**.

## Cardio

- No treino, toque em **❤️ Cardio** e escolha **Corrida, Bicicleta, Escada ou Elíptico**.
- Informe os minutos (− / +) e toque em **Registrar**, ou use **▶ Cronometrar** e **Parar e registrar** ao terminar.
- O cardio aparece no topo (min de cardio), no histórico, na evolução e no perfil do aluno.

## Área do professor (aba Alunos)

- **Igor Pedro**: o seu treino, separado dos alunos. Não aparece na lista de alunos; quando um aluno estiver aberto, use **← Voltar para o meu treino** na aba Alunos.
- **＋ Adicionar aluno**: nome, WhatsApp, objetivo e observações. Cada aluno ganha a própria planilha, começando com os mesmos exercícios do seu treino, sem as cargas.
- **Perfil do aluno**: dados e objetivo, acompanhamento (treinos e kg na semana, cardio, kg por grupo × semana anterior), últimos treinos, **montar o treino** (editar séries/carga/reps e adicionar exercícios por grupo) e **mensagem pelo WhatsApp** com modelos prontos (treino do grupo, resumo da semana, lembrete, parabéns). As mensagens enviadas ficam registradas no perfil.
- Cada aluno mostra: último treino (há quantos dias), treinos na semana e volume comparado com a semana anterior.
- Os botões **Perfil / Treino / Evolução** abrem a área do aluno. O nome no topo da tela mostra de quem é o treino aberto.
- No **⋯** do aluno (ou ✎ no perfil) dá para editar os dados ou excluir.

## Ver como o aluno

- No perfil do aluno, toque em **👁 Ver como o aluno**: o app fica como o aluno veria (faixa laranja no topo, **Sair** para voltar).
- **📅 Divisão da semana** (no perfil do aluno): você escolhe o que o aluno treina em cada dia (ex.: segunda = Peito + Cardio). Os exercícios de cada grupo são criados por você em **Exercícios do aluno**. O aluno não escolhe grupo: vê só o treino do dia (ou "dia de descanso").
- O aluno vê: boas-vindas com o último recado ("Já treinou hoje? Não esquece do cardio :)"), o treino que você montou (sem poder editar o plano), cardio, o **Calendário** com os dias treinados marcados e a aba **Recados** com as mensagens enviadas. A evolução não aparece para o aluno (fica só com o professor).
- Tudo o que for marcado nesse modo (séries e cardio) fica registrado como **marcado pelo aluno**: aparece no histórico com a etiqueta *aluno* e no perfil em **Marcações do aluno**.

## Histórico (aba Histórico)

- Calendário do mês com os dias treinados em verde. Toque em **qualquer dia** (inclusive sem treino) para ver o treino ou anotar um treino passado.
- Resumo do mês: treinos, séries e kg.
- Cada dia mostra os exercícios, séries, carga máxima, total e evolução. Use **Abrir este treino** para ver ou corrigir.

## Progressão

- Coluna **Anterior**: carga × reps de cada série no último treino. A série fica verde se você superou, vermelha se ficou abaixo.
- Abaixo de cada exercício: total de hoje × total do **treino anterior registrado** (com a data), com quanto falta para superar ou a % de evolução.
- No topo de cada grupo: volume da semana atual × semana anterior.
- Aba **Evolução**:
  - **Gráfico de carga média por série** e **gráfico de repetições por semana**, com uma linha colorida por grupo (Costas, Peito, Ombros, Pernas, Braços). Período de 4, 8 ou 12 semanas; toque no gráfico para ver os valores e nos nomes para esconder/mostrar linhas; tabela com os dados.
  - **Ver exemplo de progressão**: animação com dados simulados mostrando as linhas se formando semana a semana.
  - **Análise de carga × repetições** por grupo: compara a última semana com a anterior e sugere o próximo passo (ex.: "mais reps com a mesma carga — hora de subir o peso").
  - **kg total por treino de cada grupo muscular** (soma de carga × reps de todos os exercícios do grupo no dia), com mini gráfico e detalhes por exercício.
  - Cardio: minutos por semana e por modalidade.

## Exercícios

- **+ Adicionar exercício**: nome, grupo, nº de séries, carga e repetições iniciais.
- **⋯** no exercício: renomear, mudar de grupo, alterar o plano (séries/carga/reps) ou excluir.
- **+ série / − série** para ajustar só o treino do dia.
- O campo de data no topo permite lançar ou ver treinos de outros dias.

## Dados

Os dados ficam salvos no navegador (localStorage) do aparelho. Use **Exportar/Importar** na aba Evolução para fazer backup ou passar os dados para outro aparelho.
