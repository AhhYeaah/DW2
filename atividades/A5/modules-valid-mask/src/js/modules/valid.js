function nullishValidation(value, campo) {
  console.log([value, campo, !value, value.length]);
  if (!(value || value.length > 0)) return { where: campo, message: campo + ' EM BRANCO' };
}

export function validateNome(name) {
  const isNull = nullishValidation(name, 'nome');
  if (isNull) {
    return isNull;
  }

  if (name.split('').length > 150) {
    return { where: 'nome', message: 'NOME NÃO PODE TER MAIS QUE 150 CARACTERES' };
  }
}

export function validateCpf(cpf) {
  cpf = cpf.replace(/[\s.-]*/gim, '');

  const isCpfRepeatedNumbers = cpf.split('').every((value) => {
    return value == cpf[0];
  });

  if (!cpf || cpf.length != 11 || isCpfRepeatedNumbers) {
    return { where: 'cpf', message: 'cpf INVALIDO' };
  }

  let soma = 0;
  let resto;

  for (var i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return { where: 'cpf', message: 'cpf INVALIDO' };
  soma = 0;
  for (var i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return { where: 'cpf', message: 'cpf INVALIDO' };
}

export function validateData(data) {
  const isNull = nullishValidation(data, 'dt_nasc');
  if (isNull) {
    return isNull;
  }

  if (data.split('').length != 10) {
    return { where: 'dt_nasc', message: 'DATA INCOMPLETA' };
  }

  const [day, month, year] = data.split('/');

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month > 12 || month < 1) {
    return { where: 'dt_nasc', message: 'MÊS INVALIDO' };
  }

  if (day < 1 || day > monthLength[month - 1]) {
    return { where: 'dt_nasc', message: 'DIA INVALIDO' };
  }

  const currentYear = new Date(Date.now()).getFullYear();

  if (year < currentYear - 113) {
    return {
      where: 'dt_nasc',
      message: 'SE VOCÊ É REALMENTE O HOMEM MAIS VELHO DO MUNDO, ENTRE EM CONTATO COM O NOSSO SUPORTE, ANO INVALIDO',
    };
  }

  if (year > currentYear) {
    return { where: 'dt_nasc', message: 'OLA DO FUTURO, ANO INVALIDO' };
  }
}

export function validateEmail(email) {
  const isNull = nullishValidation(email, 'email');
  if (isNull) {
    return isNull;
  }

  if (!(email.includes('@') && email.includes('.'))) {
    return { where: 'email', message: 'FORMATO DE EMAIL INVALIDO' };
  }

  if (email.split('').length > 100) {
    return { where: 'email', message: 'EMAIL DEVE SER MENOR QUE 100 CARACTERES' };
  }
}

export function validatePhone(telefone) {
  const isNull = nullishValidation(telefone, 'fone');
  if (isNull) {
    return isNull;
  }

  if (!/\(([1-9]{2})\) ([0-9]{4,5})\-([0-9]{4})+/.test(telefone)) {
    return { where: 'fone', message: 'TELEFONE INVALIDO' };
  }
}

export function validateCEP(cep) {
  const isNull = nullishValidation(cep, 'cep');
  if (isNull) {
    return isNull;
  }

  if (!cep.split('').length == 9) {
    return { where: 'cep', message: 'CEP INCOMPLETO' };
  }
}
