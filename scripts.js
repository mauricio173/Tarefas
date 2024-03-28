//const dataAtual = new Date();

function calcularTempoRestanteParaTarefa(tarefa) {
 const dataInicio = new Date(tarefa.dataInicio);
 const dataFim = new Date(tarefa.dataFim);
 const dataConcluida = new Date(tarefa.concluida);

 const diffEmDias = calcularDiferencaDeDias(dataConcluida, dataFim);

 if (dataConcluida <= dataFim) {
  if (
   dataConcluida.getDate() === dataFim.getDate() &&
   dataConcluida.getMonth() === dataFim.getMonth() &&
   dataConcluida.getFullYear() === dataFim.getFullYear()
  ) {
   tarefa.status = "Hoje é o prazo final";
  } else {
   tarefa.status = `Tempo restante para conclusão: ${diffEmDias} dia(s)`;
  }
 } else {
  tarefa.status = `Tarefa atrasada: ${diffEmDias} dia(s)`;
  // tarefa.status = `Tarefa atrasada: ${Math.abs(diffEmDias)} dia(s)`;
 }
}

function calcularTempoRestante(tarefa) {
 const dataAtual = new Date();
 const dataInicio = new Date(tarefa.dataInicio);
 const dataFim = new Date(tarefa.dataFim);

 const diferencaInicio = dataInicio.getTime() - dataAtual.getTime();
 const diferencaFim = dataFim.getTime() - dataAtual.getTime();

 // Convertendo a diferença em milissegundos para dias
 const diasInicio = Math.ceil(diferencaInicio / (1000 * 60 * 60 * 24));
 const diasFim = Math.ceil(diferencaFim / (1000 * 60 * 60 * 24));

 // Verificando se a tarefa já está concluída
 if (diasFim < 0) {
  tarefa.tempoRestante = "Tarefa concluída";
 } else {
  tarefa.tempoRestante = diasFim > 0 ? `${diasFim} dias restantes` : "Hoje é o prazo final";
 }
}

// document.getElementById("removerChave").addEventListener("click", function (item1, item2) {
// item1 = localStorage.removeItem("Tarefas");
// item2 = localStorage.removeItem("Categorias");
// alert(`Chaves "Tarefas" e "Categorias" removidas do localStorage!`);
// location.reload();
// verTarefas();
// });

document.getElementById("removerChave").addEventListener("click", function () {
 // event.preventDefault();
 localStorage.removeItem("Tarefas");
 localStorage.removeItem("Categorias");
 alert(`Chaves "Tarefas" e "Categorias" removidas do localStorage!`);
 // location.reload();
 // verTarefas();
 // categoriasDataList();
});

function tarefaConcluida(tarefa) {
 Tarefas.forEach((item, index) => {
  const dataInicio = new Date(item.dataInicio);
  const dataFim = new Date(item.dataFim);
  const dataConcluida = new Date(item.concluida);

  if (item.concluida > item.dataFim) {
   const atrasada =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());
   const maiorUm = Math.abs(atrasada) > 1 ? "dias." : "dia.";

   (item.status = "Tarefa concluida com atraso de:"), Math.abs(atrasada), maiorUm;
   // console.log("Tarefa concluida com atraso de:", Math.abs(atrasada) , maiorUm);
   // console.log("Tarefa atrasada:",
   //   (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
   //   (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate())
   // ,"dia(s)");
  } else if (item.concluida < item.dataFim) {
   const adiantada =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());
   const maiorUm = Math.abs(adiantada) > 1 ? "dias" : "dia";
   (item.status = "Tarefa concluida com:"), Math.abs(adiantada), maiorUm, "antes do prazo.";
   // console.log("Tarefa concluida com:", Math.abs(adiantada), maiorUm, "antes do prazo.");
   // console.log(
   //   (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
   //   (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate())
   // );
  } else if (item.concluida == item.dataFim) {
   const prazo =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());

   const maiorUm = Math.abs(prazo) > 1 ? "dias." : "dia.";
   item.status = "Tarefa concluida no prazo.";
   // console.log("Tarefa concluida no prazo.");

   // console.log(
   //   (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
   //   (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate())
   // );
  }
 });
}
//tarefaConcluida();

function dif(tarefa) {
 Tarefas.forEach((item, index) => {
  const dataInicio = new Date(item.dataInicio);
  const dataFim = new Date(item.dataFim);
  const dataConcluida = new Date(item.concluida);

  //  dataConcluida.getFullYear()
  //     dataConcluida.getMonth()
  //     dataConcluida.getDate()
  let difAtraso =
   (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
   (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());

  let difAntes =
   (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
   (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());

  if (item.concluida > item.dataFim) {
   tarefa.status = `Tarefa atrasada: ${difAtraso} dia(s)`;
   console.log(
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
     (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate())
   );

   //console.log(item.concluida + "maior" + item.dataFim);
  }
  if (item.concluida < item.dataFim) {
   tarefa.status = `Concluída com ${difAntes} dia(s) de antecedência`;
   console.log(
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
     (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate())
   );
   //  console.log(item.concluida + "menor" + item.dataFim);
  }
  if (item.concluida == item.dataFim) {
   tarefa.status = "Hoje é o prazo final";
   console.log(
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
     (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate())
   );

   //console.log(item.concluida + "igual" + item.dataFim);
  }
 });
}

function calcularDiferencaDeDias(data1, data2) {
 const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
 const diffTime = Math.abs(data2 - data1);
 return Math.ceil(diffTime / umDiaEmMilissegundos);
}

// const input = document.getElementById("dataInput");
// const btnvalidarData = document.getElementById("btnvalidarData");

// function validarData(inputData) {
// const inputs = document.getElementById("dataInput").value;

// inputData = inputs;

// // Expressão regular para validar o formato da data (DD/MM/AAAA)
// const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;

// // Verifica se a entrada corresponde ao formato de data esperado
// if (!regexData.test(inputData)) {
// // console.log(regexData);
//   return false; // Formato inválido
// }

// // Extrai os componentes da data (dia, mês, ano)
// const [, dia, mes, ano] = inputData.match(regexData);

// // Converte os componentes para números inteiros
// let diaInt = parseInt(dia, 10);
// let mesInt = parseInt(mes, 10) ; // Meses são indexados de 0 a 11 em JavaScript
// const anoInt = parseInt(ano, 10);
// diaInt < 10 ? diaInt = "0" + diaInt : diaInt;

// mesInt < 10 ? mesInt = "0" + mesInt : mesInt;
// // Cria um objeto Date com os componentes fornecidos
// const data = new Date(anoInt, mesInt, diaInt);

// console.log(mesInt);
// // Verifica se a data é válida
// if (data.getDate() === diaInt && data.getMonth() === mesInt && data.getFullYear() === anoInt && inputData.length >= 10) {
//   alert(data.getDate() + " dia " + data.getMonth() + " mês " + data.getFullYear() + " ano ");
//   return ;
// }
// return (
//   data.getDate() === diaInt && 
//   data.getMonth() === mesInt &&
//   data.getFullYear() === anoInt
//   // Verifica se o dia é válido
//   // Verifica se o mês é válido
//   // Verifica se o ano é válido
// );
// }


// function formatarData(value) {

// // Adicionar as barras de acordo com o formato DD/MM/AAAA
// if (value.length <= 2) {
//   return value.replace(/^(\d{2})/, "$1");
// } 
// else if (value.length <= 4) {
//   return value.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
// } 
// else {
//   return value.replace(/^(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
// }
// }

// btnvalidarData.addEventListener("click", validarData);

// input.addEventListener("input", function (e) {
// const target = e.target;
// let inputValue = target.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
// let formattedValue = formatarData(inputValue);
// if (formattedValue.length >= 10 && validarData(formattedValue) == true) {
//   validarData(formattedValue);
// } else if (formattedValue.length >= 10 && validarData(formattedValue) == false) {
//   alert("input ");
//   console.log(formattedValue);
//   return ;
// }

// target.value = formattedValue;
// });


// function formatarData(value) {
//   // Adicionar as barras de acordo com o formato DD/MM/AAAA
//   if (value.length <= 2) {
//     return value.replace(/^(\d{2})/, '$1');
//   } else if (value.length <= 4) {
//     return value.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
//   } else {
//     let dia = value.substring(0, 2);
//     let mes = value.substring(2, 4);
//     let ano = value.substring(4, 8);

//     // Remover barras extras se o usuário estiver apagando
//     if (value.length > 4 && value.charAt(2) !== '/') {
//       mes = mes.slice(0, -1);
//     }
//     if (value.length > 2 && value.charAt(5) !== '/') {
//       dia = dia.slice(0, -1);
//     }

//     return dia + '/' + mes + '/' + ano;
//   }
// }


// Exemplo de uso

// let inputValues = input.value;
// 
// const dataInput = "14/03/2024";
// if (validarData(inputValues)) {
//  console.log("Data válida!");
// } else {
//  console.log("Data inválida!");
// }

// function formatarData(value) {
// // Adicionar as barras de acordo com o formato DD/MM/AAAA
// if (value.length <= 1) {
//   return value.replace(/^(\d{2})/, "$1");
// } else if (value.length <= 3) {
//   return value.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
// } else {
//   return value.replace(/^(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
// }
// }



// function formatarData(value) {
//   // Adicionar as barras de acordo com o formato DD/MM/AAAA
//   if (value.length === 2) {
//     // Inserir a barra após o dia (se o dia foi preenchido com 2 dígitos)
//     return value + "/";
//   } else if (value.length === 5) {
//     // Inserir a barra após o mês (se o mês foi preenchido com 2 dígitos)
//     return value + "/";
//   } else {
//     // Verifica se o último caractere apagado foi uma barra (/)
//     const lastChar = value.substr(value.length - 1);
//     const penultimateChar = value.substr(value.length - 2, 1);
//     if (lastChar === "/" && penultimateChar.match(/\d/)) {
//       // Se o último caractere apagado foi uma barra (/) e o penúltimo caractere for um número
//       // Inserir a barra (/) novamente
//       return value.substring(0, value.length - 1) + "/";
//     } else if (value.length === 4 || value.length === 7) {
//       // Verifica se o último caractere apagado foi o último dígito do mês ou do ano
//       // Se sim, remove o último caractere
//       return value.substring(0, value.length - 1);
//     } else {
//       // Caso contrário, mantém o valor sem alterações
//       return value;
//     }
//   }
// }

// function formatarData(value) {

// // Adicionar as barras de acordo com o formato DD/MM/AAAA
// // if (value.length < 2 || value.length == 2  ) {
// //   console.log(value.length);
// //   return value.replace(/^(\d{2})/, "$1");
// // } 
// // if (value.length <= 2 ) {
// //   console.log(value.length);
// //   return value.replace(/^(\d{2})/, "$1");
// // } 
// // atual 
// // if (value.length < 3 && value.length > 2 ) {
// //   console.log(value.length);
// //   return value.replace(/^(\d{2})/, "$1");
// // } 

// // if (value.length < 3 && value.length > 2) {
// //   console.log(value.length + " if");
// //   return value.replace(/^(\d{2})/, "$1");
// // } 
// if (value.length <= 2) {
//   // console.log(value.length + " if");
//   return value.replace(/^(\d{2})/, "$1");
// } 
// else if (value.length <= 4) {
//   // console.log(value.length + " else if");
//   return value.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
// } 
// else {
//   // console.log(value.length + " else");
//   return value.replace(/^(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
// }
// }

// function validarData(inputData) {
// const inputs = document.getElementById("dataInput").value;

// inputData = inputs;

// // Expressão regular para validar o formato da data (DD/MM/AAAA)
// const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;

// // Verifica se a entrada corresponde ao formato de data esperado
// if (!regexData.test(inputData)) {
// // console.log(regexData);
//   return false; // Formato inválido
// }

// // Extrai os componentes da data (dia, mês, ano)
// const [, dia, mes, ano] = inputData.match(regexData);

// // Converte os componentes para números inteiros
// const diaInt = parseInt(dia, 10);
// const mesInt = parseInt(mes, 10) - 1; // Meses são indexados de 0 a 11 em JavaScript
// const anoInt = parseInt(ano, 10);

// // Cria um objeto Date com os componentes fornecidos
// const data = new Date(anoInt, mesInt, diaInt);

// console.log(data.getMonth());
// // Verifica se a data é válida
// if (data.getDate() === diaInt && data.getMonth() === mesInt && data.getFullYear() === anoInt && inputData.length >= 10) {
//   alert(data.getDate() + " dia " + data.getMonth() + " mês " + data.getFullYear() + " ano ");
//   return ;
// }
// return (
//   data.getDate() === diaInt && 
//   data.getMonth() === mesInt &&
//   data.getFullYear() === anoInt
//   // Verifica se o dia é válido
//   // Verifica se o mês é válido
//   // Verifica se o ano é válido
// );
// }
