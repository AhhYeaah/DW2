import { getInfoByState, getState } from './apiCalls.mjs';
import { initiateCepMask } from './mask.mjs';
import { populateTable } from './table.mjs';

function init() {
  initiateCepMask();
  initiateFormEventListener();
}

function initiateFormEventListener() {
  const form = document.getElementById('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const cep = document.querySelector('input#cep').value;

    const stateUf = await getState(cep);
    if (stateUf) {
      const info = await getInfoByState(stateUf);
      if (info) populateTable(info.suspects, info.cases, info.deaths, info.state);
    }

    return false;
  });
}

init();
