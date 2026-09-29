// Configuração da Planilha de Treino na nuvem (Firebase).
// Enquanto "firebase" estiver null, o app funciona sem login, guardando tudo só no aparelho.
window.PLANILHA_CONFIG = {
  // E-mail do administrador (professor). Use o mesmo em firestore.rules.
  adminEmail: 'COLOQUE_SEU_EMAIL_AQUI',
  // Cole aqui o firebaseConfig do seu projeto (Configurações do projeto → Seus apps → Web)
  firebase: {
    apiKey: 'AIzaSyDvRAuGDJYaIASxMoRh6nuW7oVFY9t4dxQ',
    authDomain: 'treino-8a1e0.firebaseapp.com',
    projectId: 'treino-8a1e0',
    storageBucket: 'treino-8a1e0.firebasestorage.app',
    messagingSenderId: '599128474221',
    appId: '1:599128474221:web:b59733fa0a954afa91b564',
  },
};
