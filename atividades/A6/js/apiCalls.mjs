export async function getState(cep) {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    if (data.erro) {
      alert('CEP inexistente');
    } else {
      return data.uf;
    }
  } catch {
    alert('CEP incompleto');
  }
}

export async function getInfoByState(uf) {
  try {
    const { data } = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`);
    return data;
  } catch (error) {}
}
