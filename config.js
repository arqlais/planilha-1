// Configuração da Planilha de Treino na nuvem (Firebase).
// Enquanto "firebase" estiver null, o app funciona sem login, guardando tudo só no aparelho.
window.PLANILHA_CONFIG = {
  // E-mail do administrador (professor). Use o mesmo em firestore.rules.
  adminEmail: 'COLOQUE_SEU_EMAIL_AQUI',
  // Cole aqui o firebaseConfig do seu projeto (Configurações do projeto → Seus apps → Web)
  firebase: null,
};
