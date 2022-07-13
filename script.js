const botao = document.getElementById('button');
const email = document.getElementById('user');
const senha = document.getElementById('senha');

botao.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
