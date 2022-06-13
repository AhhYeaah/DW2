import { validateCEP, validateCpf, validateData, validateEmail, validateNome, validatePhone } from './modules/valid.js';
import './modules/mask.js';

const campos = ['nome', 'cpf', 'dt_nasc', 'email', 'fone', 'cep'];

function setError(idCampo) {
  document.querySelector('input#' + idCampo).classList.add('errorInput');
}

function resetForms() {
  campos.forEach((element) => {
    document.querySelector('input#' + element).classList.remove('errorInput');
  });
}
document.querySelector('.form').addEventListener('submit', (event) => {
  resetForms();
  validate(event);
  return false;
});

function validate(event) {
  event.preventDefault();

  const values = getValues();

  const errors = [
    validateNome(values[campos[0]]),
    validateCpf(values[campos[1]]),
    validateData(values[campos[2]]),
    validateEmail(values[campos[3]]),
    validatePhone(values[campos[4]]),
    validateCEP(values[campos[5]]),
  ];

  const errorMessages = [];

  if (errors.length > 0) {
    errors.forEach((element) => {
      if (element != undefined) {
        setError(element.where);
        errorMessages.push(element.message);
      }
    });
  }

  if (errorMessages.length > 0) {
    window.alert(errorMessages.join('\n'));
  } else {
    window.alert('Cadastro realizado');
  }
}

function getValues() {
  const values = {};

  campos.forEach((id) => {
    values[id] = document.querySelector('input#' + id).value;
  });

  return values;
}
