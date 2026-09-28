# Planilha de Treino

> Para professores: tem uma área para o **seu treino particular** e uma para **acompanhar cada aluno**.

App simples (um único arquivo `index.html`) para registrar treinos de musculação, separado por grupo muscular: **Costas, Peito, Ombros, Pernas e Braços**.

## Como usar

1. Abra o `index.html` no navegador (celular ou computador). Para usar no celular, ative o **GitHub Pages** do repositório (Settings → Pages → branch principal) e salve o link na tela inicial.
2. Escolha o grupo muscular na barra de abas.
3. Cada exercício já vem preenchido com as cargas e repetições do **último treino**. Ajuste com os botões **− / +** (carga de 2,5 em 2,5 kg, reps de 1 em 1) ou digite, e toque em **✓** em cada série feita.
4. O total (carga × repetições) é somado automaticamente.
5. Ao marcar uma série, abre um **timer de descanso** de 2 minutos (ajuste com −15s / +15s; o app lembra o tempo preferido).
6. Ao concluir um exercício superando o treino anterior, aparece a comemoração de **recorde** 🏆.

## Área do professor (aba 👥 Alunos)

- **Meu treino (particular)**: o seu treino, separado dos alunos.
- **＋ Adicionar aluno**: cada aluno ganha a própria planilha, começando com os mesmos exercícios do seu treino, sem as cargas.
- Cada aluno mostra: último treino (há quantos dias), treinos na semana e volume comparado com a semana anterior.
- Os botões **Treino / Histórico / Evolução** abrem a área do aluno. O nome no topo da tela mostra de quem é o treino aberto.
- No **⋯** do aluno dá para renomear ou excluir.

## Histórico (aba 📅)

- Calendário do mês com os dias treinados destacados e os grupos feitos em cada dia.
- Resumo do mês: treinos, séries e kg.
- Cada dia mostra os exercícios, séries, carga máxima, total e evolução. Use **Abrir este treino** para ver ou corrigir.

## Progressão

- Coluna **Anterior**: carga × reps de cada série no último treino. A série fica verde se você superou, vermelha se ficou abaixo.
- Abaixo de cada exercício: total de hoje × total anterior, com quanto falta para superar ou a % de evolução.
- No topo de cada grupo: volume da semana atual × semana anterior.
- Aba **📈 Evolução**: comparação semanal de todos os grupos e histórico de cada exercício com gráfico.

## Exercícios

- **+ Adicionar exercício**: nome, grupo, nº de séries, carga e repetições iniciais.
- **⋯** no exercício: renomear, mudar de grupo, alterar o plano (séries/carga/reps) ou excluir.
- **+ série / − série** para ajustar só o treino do dia.
- O campo de data no topo permite lançar ou ver treinos de outros dias.

## Dados

Os dados ficam salvos no navegador (localStorage) do aparelho. Use **Exportar/Importar** na aba Evolução para fazer backup ou passar os dados para outro aparelho.
