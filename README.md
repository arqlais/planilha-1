# Planilha de Treino

> Para professores: tem uma área para o **seu treino particular** e uma para **acompanhar cada aluno**.

App simples (um único arquivo `index.html`) para registrar treinos de musculação, separado por grupo muscular: **Costas, Peito, Ombros, Bíceps, Tríceps, Abdômen** e, em **Pernas**, **Quadríceps, Posteriores e Panturrilha**. (Exercícios antigos de "Braços" e "Pernas" são distribuídos automaticamente pelo nome.)

## Como usar

1. Abra o `index.html` no navegador (celular ou computador). Para usar no celular, ative o **GitHub Pages** do repositório (Settings → Pages → branch principal) e salve o link na tela inicial.
2. Escolha o treino pelo nome (ou **Cardio**). Os treinos têm o **nome que você quiser** (ex.: Superiores, Inferiores, Full body, Treino A): toque em **＋ Novo treino** para criar, e em **✎ Renomear** / **Excluir treino** no topo do treino. Cada treino reúne exercícios de um ou mais grupos musculares. Exercícios que ainda não estão em nenhum treino ficam em **Exercícios sem treino**, com botão para mover para o treino aberto. Use **‹ ›** para ir para outros dias (ou toque na data no topo).
3. Cada exercício já vem preenchido com as cargas e repetições do **último treino**. Ao digitar kg e repetições de uma série e sair do campo, ela é **marcada como feita automaticamente** (o ✓ continua servindo para marcar ou desmarcar). As séries aparecem em **quadrados** (carga em cima, repetições embaixo e o valor do treino anterior); digite e toque em **✓** em cada série feita. Em **☰ Lista** voltam os botões **− / +**.
4. O total (carga × repetições) é somado automaticamente.
5. Ao marcar uma série, abre um **timer de descanso** de 2 minutos (ajuste com −15s / +15s; o app lembra o tempo preferido).
6. Ao concluir um exercício superando o treino anterior, aparece a comemoração de **recorde**.

## Cardio

- No treino, toque em **Cardio** e escolha **Corrida, Bicicleta, Escada ou Elíptico**.
- Informe os minutos (− / +) e toque em **Registrar**, ou use **▶ Cronometrar** e **Parar e registrar** ao terminar.
- O cardio aparece no topo (min de cardio), no histórico, na evolução e no perfil do aluno.

## No computador (só o professor)

Com a tela larga (computador), o app do professor vira uma plataforma com **menu lateral**: Meu treino, Alunos, Montar treinos, Pagamentos, Histórico e Evolução. No celular nada muda.

- **Alunos:** lista à esquerda (com busca) e o aluno aberto à direita, com abas: **Resumo**, **Montar treino**, **Planejamento**, **Marcações**, **Medidas**, **Mensagens** e **Pagamento**.
- **Planejamento pronto:** ao lado da aba Pagamento há o botão **✓ Marcar planejamento pronto**. Na lista de alunos aparece **✓ alinhado** (pronto) ou **⏳ planejar** (ainda falta). Toque de novo para desmarcar. No celular o botão fica no perfil do aluno.
- **Cardio:** "Tempo realizado" para anotar qualquer tempo à mão; barra com "Meta: X min" (no seu treino, toque em "alterar" para mudar a sua meta; a do aluno você coloca no perfil dele). **Cronômetro:** digite os minutos (ou use − e +), escolha Regressivo ou Progressivo e toque em Iniciar; a barra acompanha o tempo e, ao terminar, salva sozinho, vibra e toca um aviso.
- **Salvar treino:** no fim da montagem, o botão **✓ Salvar treino** grava na hora, confere na nuvem que tudo chegou e mostra a confirmação (com horário). Se mudar algo depois, salve de novo.
- **Treino guardado:** treino novo criado em Montar treinos (ou copiado/duplicado) fica **🙈 escondido do app**: salvo, mas não aparece no app do aluno (nem no seu Meu treino). Toque em **Liberar no app** quando estiver pronto.
- **Séries por grupo na semana:** setas **‹ ›** no canto para ver a semana passada e as próximas. Dia que o aluno já treinou conta o que ele tinha naquele dia: mudar a montagem depois não "abre" a semana que ele já fechou; a mudança vale para a frente.
- **Nada se perde entre aparelhos:** cada aparelho grava só o que ele mudou e junta com o que já está na nuvem (exercício por exercício, data por data). Sem internet, a ficha fica guardada no aparelho e sobe juntando quando a internet volta.
- **Versões salvas:** em Planejamento → **↺ Versões salvas do planejamento**: uma versão a cada 10 minutos de edição (as últimas 40 de cada aluno) e a cópia de cada dia. **Usar esta** traz de volta os treinos montados, a divisão e o planejamento daquela versão.
- **Montar treinos:** tabela por treino com ordem (↑ ↓), exercício, grupo, séries, repetições, carga, descanso (segundos), técnica (Bi-set, Drop-set, Rest-pause…) e observação para o aluno. **▸ séries** edita série por série. Duplicar exercício, duplicar treino e **copiar o treino para outro aluno**. Tudo salva sozinho. O aluno vê técnica, descanso e observação embaixo do nome do exercício (só se preenchidos), e o cronômetro de descanso usa o tempo do exercício. Quando o plano muda, a próxima sessão do aluno já vem com as cargas e repetições novas.
- **Pagamentos:** plano, valor e dia de vencimento de cada aluno; por mês: previsto, recebido, a receber e atrasado; **Marcar pago** (valor, data, forma) e **Cobrar** (WhatsApp com mensagem pronta e sua chave Pix). No celular: aba Alunos → 💳 Pagamentos.

## Área do professor (aba Alunos)

- **Igor Pedro**: o seu treino, separado dos alunos. Não aparece na lista de alunos; quando um aluno estiver aberto, use **← Voltar para o meu treino** na aba Alunos.
- **＋ Adicionar aluno**: nome, WhatsApp, objetivo e observações. Cada aluno ganha a própria planilha, começando com os mesmos exercícios do seu treino, sem as cargas.
- **Séries por grupo na semana** (topo do perfil do aluno, só o professor vê): quantas séries cada grupo muscular tem na divisão da semana (ex.: Glúteos 9 séries) e quantas o aluno já fez nesta semana.
- **Perfil do aluno**: dados e objetivo, acompanhamento (treinos e kg na semana, cardio, kg por grupo × semana anterior), últimos treinos, **montar o treino** (editar séries/carga/reps e adicionar exercícios por grupo) e **mensagem pelo WhatsApp** com modelos prontos (treino do grupo, resumo da semana, lembrete, parabéns). As mensagens enviadas ficam registradas no perfil.
- Cada aluno mostra: último treino (há quantos dias), treinos na semana e volume comparado com a semana anterior.
- Os botões **Perfil / Treino / Evolução** abrem a área do aluno. O nome no topo da tela mostra de quem é o treino aberto.
- No **⋯** do aluno (ou ✎ no perfil) dá para editar os dados ou excluir.

## Ver como o aluno

- No perfil do aluno, toque em **👁 Ver como o aluno**: o app fica como o aluno veria (faixa laranja no topo, **Sair** para voltar).
- **📆 Planejamento das próximas semanas** (perfil do aluno): esta semana e as próximas, dia a dia. Toque num dia para escolher o treino só daquela data (com meta de cardio); os outros dias seguem a divisão da semana. **Copiar para a semana seguinte** repete a semana. No Histórico do aluno, os dias futuros também abrem o planejamento.
- **📅 Divisão da semana** (no perfil do aluno): você escolhe o que o aluno treina em cada dia (ex.: segunda = Superiores + Cardio). Os treinos (com o nome que você quiser) e os exercícios são criados por você em **Treinos do aluno**. O aluno não escolhe o treino: vê só o treino do dia (ou "dia de descanso").
- **Cardio do aluno**: em todo dia de treino, o aluno vê o cartão **Cardio** logo acima do Treino A. Ele escolhe o tipo (Corrida, Bicicleta, Escada, Elíptico) e digita o **Tempo realizado** (aceita número quebrado, ex.: 12,5); a barra enche da esquerda para a direita e embaixo dela aparece a **Meta**. A meta é definida por você no perfil do aluno (**Meta de cardio**, minutos por dia; um dia da divisão pode ter meta própria). A linha vai de 0 a 100% da meta (ex.: 5 de 20 min = 25%) e anima até o tempo feito.
- Aluno novo começa **sem exercícios**; no diálogo de exercício, séries e repetições começam vazias (séries é obrigatório).
- A série só é confirmada com **carga e repetições** anotadas.
- Professor e alunos escolhem a **cor do app** em ⚙ **Configurações** (canto superior direito); cada conta tem a sua cor. Nas Configurações do professor também fica a **meta diária de cardio** dele.
- O login do aluno fica salvo no aparelho e o app abre direto no treino de hoje (melhor ainda instalando na tela de início).
- O aluno vê: boas-vindas com o último recado ("Já treinou hoje? Não esquece do cardio :)"), o treino que você montou (sem poder editar o plano), cardio, o **Calendário** com os dias treinados marcados e a aba **Recados** com as mensagens enviadas. A evolução não aparece para o aluno (fica só com o professor).
- Tudo o que for marcado nesse modo (séries e cardio) fica registrado como **marcado pelo aluno**: aparece no histórico com a etiqueta *aluno* e no perfil em **Marcações do aluno**.

## Medidas do corpo

- Professor e alunos anotam **peso, altura, idade** e as medidas (busto, cintura, abdômen, quadril, dorsal, braços, coxas e panturrilhas, direita e esquerda). Aceita número quebrado (58,5).
- O aluno tem a aba **Medidas** embaixo; o professor abre pelo cartão **Medidas do corpo** na aba Evolução (as dele) ou no perfil do aluno (as do aluno).
- Cada avaliação fica com a data. A tabela mostra o valor mais recente de cada medida, o anterior e a diferença; com peso e altura aparece o IMC.

## Histórico antigo do aluno

- No perfil do aluno (ou, para o seu próprio treino, tocando no seu nome no topo da tela (**Meu perfil**) ou no fim da aba **Evolução**), **⬆ Importar histórico** traz os treinos anotados antes do app (arquivo de histórico preparado a partir da planilha antiga).
- Junta com o que já existe, sem apagar nada: cria os treinos e a divisão da semana (só nos dias que estiverem vazios), os exercícios e as séries de cada data, e as medidas. Importar o mesmo arquivo de novo não duplica.
- O mesmo exercício em dois treinos (ex.: Cadeira flexora na segunda e na quinta) usa um só histórico para comparar as cargas.

## Histórico (aba Histórico)

- Atalhos com os **meses que têm treino** (ex.: Jun/26 · Mai/26) acima do calendário, para ir direto a um mês antigo.
- Calendário do mês com os dias treinados em verde. Toque em **qualquer dia** (inclusive sem treino) para ver o treino ou anotar um treino passado.
- Resumo do mês: treinos, séries e kg.
- Cada dia mostra os exercícios, séries, carga máxima, total e evolução. Use **Abrir este treino** para ver ou corrigir.

## Progressão

- Coluna **Anterior**: carga × reps de cada série no último treino. A série fica verde se você superou, vermelha se ficou abaixo.
- Abaixo de cada exercício: total de hoje × total do **treino anterior registrado** (com a data), com quanto falta para superar ou a % de evolução.
- No topo de cada grupo: volume da semana atual × semana anterior.
- Aba **Evolução**:
  - **Gráfico de carga média por série** e **gráfico de repetições por semana**, com uma linha colorida por grupo muscular. Período de 4, 8 ou 12 semanas; toque no gráfico para ver os valores e nos nomes para esconder/mostrar linhas; tabela com os dados.
  - **Ver exemplo de progressão**: animação com dados simulados mostrando as linhas se formando semana a semana.
  - **Análise de carga × repetições** por grupo: compara a última semana com a anterior e sugere o próximo passo (ex.: "mais reps com a mesma carga — hora de subir o peso").
  - **kg total por treino de cada grupo muscular** (soma de carga × reps de todos os exercícios do grupo no dia), com mini gráfico e detalhes por exercício.
  - Cardio: minutos por semana e por modalidade.

## Exercícios

- **+ Adicionar exercício**: nome, treino, grupo muscular, nº de séries, carga e repetições iniciais.
- **⋯** no exercício: renomear, mudar de treino ou de grupo, alterar o plano (séries/carga/reps) ou excluir.
- **+ série / − série** para ajustar só o treino do dia.
- O campo de data no topo permite lançar ou ver treinos de outros dias.

## Publicar com login (professor + portal dos alunos) — grátis

Com o Firebase (Google, plano gratuito), o app ganha login e tudo fica salvo na nuvem:

- **Você (administrador)** entra com o seu e-mail e vê tudo: seu treino, alunos, divisão da semana, marcações e recados.
- **Conta sem código:** a pessoa pode abrir o site, tocar em **Criar conta** e informar nome, e-mail e senha. O pedido aparece na aba **Alunos** em **Pedidos de novos alunos**; ela só entra quando você toca em **Aceitar** (dá para ligar a um aluno que você já cadastrou). Se a pessoa já era aluna e o perfil sumiu, o pedido leva junto a cópia dos treinos que ficou no celular dela e, ao aceitar, ela volta com tudo.
- **Cada aluno** cria a própria conta pelo **link de convite** (perfil do aluno → *Portal do aluno* → *Enviar convite pelo WhatsApp*) e entra num portal só dele: treino do dia, calendário e recados.
- O que o aluno marca aparece para você na hora, e o treino que você monta aparece para ele.
- Regras de segurança (`firestore.rules`): o aluno só consegue ler e gravar os próprios dados.

### 1. Criar o projeto no Firebase (uma vez)

1. Acesse **console.firebase.google.com** → **Criar projeto** (ex.: `planilha-igor`). Pode desativar o Google Analytics.
2. **Authentication → Começar → E-mail/senha → Ativar**.
3. **Firestore Database → Criar banco de dados** → região `southamerica-east1` → modo produção.
4. **Firestore Database → Regras**: cole o conteúdo de `firestore.rules`, trocando `COLOQUE_SEU_EMAIL_AQUI` pelo seu e-mail, e **Publicar**.
5. **Configurações do projeto → Seus apps → `</>` (Web)** → registre o app e copie o `firebaseConfig`.
6. Em `config.js`, coloque o seu e-mail em `adminEmail` e cole o `firebaseConfig` em `firebase`.

### 2. Colocar no ar

**Opção A — pelo computador (Firebase Hosting, endereço `seu-projeto.web.app`):**

```
npm install -g firebase-tools
firebase login
firebase deploy --project SEU_PROJETO
```

**Opção B — só pelo celular (GitHub Pages):** no GitHub, **Settings → Pages → Branch** = este branch, pasta `/ (root)`. Depois, no Firebase: **Authentication → Configurações → Domínios autorizados → Adicionar** `SEU_USUARIO.github.io`.

### 3. Primeiro acesso

1. Abra o endereço, toque em **Primeiro acesso? Criar conta** e cadastre-se **com o e-mail de administrador** (faça isso antes de divulgar o link).
2. O app oferece enviar os dados do aparelho para a nuvem. Se os seus treinos estão em outro endereço (ex.: o link do claude.ai), use lá **Alunos → ⬇ Exportar** e aqui **⬆ Importar**.
3. Cadastre os alunos e envie o convite de cada um.
4. No celular: **Compartilhar → Adicionar à Tela de Início** para abrir como app.

### Limites do plano gratuito

Para as leituras do Firebase não crescerem com os anos, o app do professor carrega só os **últimos 6 meses** de cada aluno ao abrir. Meses mais antigos são buscados na hora em que forem necessários (calendário de meses antigos, backup e importação). O aluno carrega só os próprios dados.

## Sem internet

- Depois de abrir o app uma vez com internet, ele fica guardado no aparelho: dá para **abrir e anotar o treino sem internet** (aparece a faixa "📴 Sem internet").
- Tudo fica salvo no aparelho e **sobe sozinho para a nuvem** quando a internet voltar (professor e aluno). Enviar treino também funciona sem internet.

## Enviar treino

- Quando todas as séries do treino do dia estão confirmadas (carga e repetições), aparece no fim da tela o botão **✓ Enviar treino**. Vale para os alunos e para o seu treino.
- Depois de enviado, o treino fica registrado (para o aluno e para você) e **ninguém consegue mais alterar** cargas, repetições ou séries. No histórico e nas marcações aparece **✓ enviado**.
- Só dá para mexer no treino de **hoje**. Dias passados ficam só para consulta.
- Excluir um exercício que já tem treinos registrados só tira ele do treino: o histórico continua guardado.

## Segurança dos dados

- **O Firebase não deixa apagar** alunos nem treinos (regras de segurança). **Excluir** manda o aluno para a **🗑 Lixeira** (fim da aba Alunos), de onde ele volta com tudo.
- **Cópia automática diária na nuvem** de cada aluno e do seu treino, guardada por 30 dias (aba Alunos → Backup → ☁ Cópias automáticas → escolha o dia → Restaurar). A cópia do dia se atualiza a cada 3 horas e nunca é trocada por uma com menos treinos.
- Nenhuma ação do app apaga alunos. Nenhuma outra ação (importar, restaurar backup, erro de sincronização) apaga alunos.
- **Resgate:** cada aparelho guarda uma cópia do que já viu. Se um aluno sumir da nuvem sem ter sido excluído, aparece na aba Alunos o cartão **Alunos para recuperar** com o botão **Restaurar**. Se só o celular do aluno tiver a cópia, ele vê **⬇ Baixar cópia dos meus treinos** na tela de entrada e manda o arquivo ao professor, que usa **⬆ Restaurar backup**.
- **⬆ Restaurar backup** (aba Alunos) só aceita o arquivo de backup do app (`treino-backup-….json`) e, antes de trocar os dados, baixa uma cópia do que existe. Se escolher um arquivo de histórico ali, ele é importado no perfil certo, juntando, sem apagar nada.

## Dados

Os dados ficam salvos no navegador (localStorage) do aparelho. Use **Exportar/Importar** na aba Evolução para fazer backup ou passar os dados para outro aparelho.
