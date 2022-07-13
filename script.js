const botao = document.getElementById('button"');
const email = document.getElementById('user');
const senha = document.getElementById('senha');

botao.addEventListener('click', function(){

if (email === "tryber@teste.com" && senha === 123456) {
    alert("Olá, Tryber!");
}
else {
    alert("Email ou senha inválidos.")
}}

