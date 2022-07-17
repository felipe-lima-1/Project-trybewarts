const botao = document.getElementById('button');
const email = document.getElementById('user');
const senha = document.getElementById('senha');
const enviar = document.getElementById('submit-btn');
const concorda = document.getElementById('agreement');
enviar.disabled = true;

botao.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function ok() {
  if (concorda.checked === true) {
    enviar.disabled = false;
  } else if (concorda.checked === false) {
    enviar.disabled = true;
  }
}
concorda.addEventListener('click', ok);
