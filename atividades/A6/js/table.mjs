export function populateTable(suspects, cases, deaths, state) {
  document.querySelector('span').innerHTML = 'Exibindo as informações do estado: ' + state;
  document.querySelector('td#suspeitos').innerHTML = suspects;
  document.querySelector('td#casos').innerHTML = cases;
  document.querySelector('td#mortes').innerHTML = deaths;
}
