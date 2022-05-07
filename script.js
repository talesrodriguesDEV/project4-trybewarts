const button = document.getElementById('loginButton');
const email = document.getElementById('insert-email');
const senha = document.getElementById('insert-senha');
button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

const textarea = document.querySelector('textarea');
textarea.addEventListener('keyup', (quantidade) => {
  quantidade = textarea.value;
  const limite = 500;
  const maximo = quantidade.length;
  let resto = '';
  if (maximo <= limite) {
    resto = limite - maximo;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('textarea').value = quantidade.slice(0, limite);
  }
});

const button2 = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
agreement.addEventListener('click', () => {
  if (button2.disabled === true) {
    button2.disabled = false;
  } else {
    button2.disabled = true;
  }
});

// Requisito 21
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email2 = document.querySelector('#input-email');
const obs = document.querySelector('#textarea');
const checkboxes = document.querySelectorAll('input[type=checkbox]');
for (let index = 0; index < checkboxes.length; index += 1) {
  checkboxes[index].addEventListener('click', (event) => {
    if (event.target.className === 'subject form-check-input') {
      event.target.classList.add('subject1');
    } else {
      event.target.classList.remove('subject1');
    }
  });
}
const options = document.querySelectorAll('option');
let option = '';
const families = document.querySelectorAll('.family');
let family = '';
let conteudo = '';
const notas = document.querySelectorAll('.nota');
let nota = 0;
function displayHouse() {
  for (let index = 0; index < options.length; index += 1) {
    if (options[index].selected) { option = options[index].innerText; }
  }
}
function displayFamily() {
  for (let index = 0; index < families.length; index += 1) {
    if (families[index].checked) { family = families[index].value; }
  }
}
function displaySubjects() {
  const conteudos = document.querySelectorAll('.subject1');
  for (let index = 0; index < conteudos.length; index += 1) {
    if (conteudos[index].id !== 'agreement' && index !== conteudos.length - 1) {
      conteudo += `${conteudos[index].value}, `;
    } else {
      conteudo += `${conteudos[index].value}`;
    }
  }
}
function displayGrades() {
  for (let index = 0; index < notas.length; index += 1) {
    if (notas[index].checked) { nota = notas[index].value; }
  }
}
button2.addEventListener('click', () => {
  displayHouse();
  displayFamily();
  displaySubjects();
  displayGrades();
  const form = document.querySelector('#evaluation-form');
  form.innerHTML = '';
  form.innerHTML = `<div>Nome: ${nome.value} ${sobrenome.value}</div>
  <div>Email: ${email2.value}</div>
  <div>Casa: ${option}</div><div>Família: ${family}</div><div>Matérias: ${conteudo}</div>
  <div>Avaliação: ${nota}</div>
  <div>Observações: ${obs.value}</div>`;
});
