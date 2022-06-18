export function cepMask(value) {
  return value
    .replace(/\D+/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
}

export function initiateCepMask() {
  document.querySelector('input#cep').addEventListener('input', (event) => {
    event.target.value = cepMask(event.target.value);
  });
}
