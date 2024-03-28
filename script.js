// Original
/*function verCategoria() {
 containerTarefas.innerHTML = "";
 Categorias.forEach((tarefa, index) => {
  let div = document.createElement("div");
  div.classList.add("container-categorias");
  div.innerHTML = ` 
  <h1>${tarefa.nome}</h1>
       <div class="box_flex">
          <button type="button" onclick='editarCategoria(${tarefa.id},"${tarefa.nome}")'>EDITAR</button>
                    <button type="button" onclick="delCategoria(${tarefa.id})">EXCLUIR</button>
              
       </div>
  `;

  containerTarefas.appendChild(div);
 });
}*/

/*function verCategoria() {
const containerTarefa = document.querySelectorAll(".container-tarefas");
 containerTarefas.innerHTML = "";
console.log(containerTarefa.length+1);
 Categorias.forEach((categoria, index) => {
  let div = document.createElement("div");
  div.classList.add("container-categorias");
  div.innerHTML = ` 
  <h1>${categoria.nome}</h1>
       <div class="box_flex">
          <button type="button" onclick='editarCategoria(${categoria.id},"${categoria.nome}")'>EDITAR</button>
                    <button type="button" onclick="delCategoria(${categoria.id})">EXCLUIR</button>
              
       </div>
  `;

  containerTarefas.appendChild(div);
 });
}*/

// Original
// function verTarefas() {
// containerTarefas.innerHTML = "";

// Tarefas.forEach((tarefa, index) => {
//   let div = document.createElement("div");
//   div.classList.add("box-tarefas");

//   const DataAtual = new Date();
//   const DataAtualAno = DataAtual.getFullYear();
//   let DataAtualMes = DataAtual.getMonth() + 1;
//   DataAtualMes = DataAtualMes < 10 ? "0" + DataAtualMes : DataAtualMes;
//   let DataAtualDia = DataAtual.getDate();
//   DataAtualDia = DataAtualDia < 10 ? "0" + DataAtualDia : "" + DataAtualDia;
//   const DataAtualFormatada = DataAtualAno + "-" + DataAtualMes + "-" + DataAtualDia;
//   let dataInicio = new Date(tarefa.dataInicio);
//   let dataFim = new Date(tarefa.dataFim);

//   let DataFimAno = dataFim.getFullYear();
//   let DataFimMes = dataFim.getMonth() + 1;
//   let DataFimDia = dataFim.getDate();
//   const dataConcluida = new Date(tarefa.concluida);
//   if (DataAtualFormatada > tarefa.dataFim && tarefa.estado == false) {
//   const atrasada =
//     (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
//     (DataAtual.getFullYear(), DataAtual.getMonth() + 1, DataAtual.getDate() - 1);
//   const maiorUm = Math.abs(atrasada) > 1 ? " dias." : " dia.";

//   tarefa.status = "Tarefa com atraso de " + Math.abs(atrasada) + maiorUm;
//   } else if (DataAtualFormatada < tarefa.dataFim && tarefa.estado == false) {
//   const adiantada =
//     (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
//     (DataAtual.getFullYear(), DataAtual.getMonth() + 1, DataAtual.getDate() -1) ;
//   const maiorUm = Math.abs(adiantada) > 1 ? " dias" : " dia";
//   tarefa.status = "Tarefa com " + Math.abs(adiantada) + maiorUm + " antes do prazo.";
//   } else if (DataAtualFormatada == tarefa.dataFim && tarefa.estado == false) {
//   const prazo =
//     (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
//     (DataAtual.getFullYear(), DataAtual.getMonth() + 1, DataAtual.getDate());

//   const maiorUm = Math.abs(prazo) > 1 ? "dias." : "dia.";
//   tarefa.status = "Último dia para concluir a tarefa no prazo.";

//   // console.log(
//   //   (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
//   //   (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate())
//   // );
//   }

//   if (tarefa.concluida > tarefa.dataFim && tarefa.estado == true) {
//   const atrasada =
//     (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
//     (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());
//   const maiorUm = Math.abs(atrasada) > 1 ? " dias." : " dia.";

//   tarefa.status = "Tarefa concluida com atraso de " + Math.abs(atrasada) + maiorUm;
//   } else if (tarefa.concluida < tarefa.dataFim && tarefa.estado == true) {
//   const adiantada =
//     (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
//     (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());
//   const maiorUm = Math.abs(adiantada) > 1 ? " dias" : " dia";
//   tarefa.status = "Tarefa concluida com " + Math.abs(adiantada) + maiorUm + " antes do prazo.";
//   } else if (tarefa.concluida == tarefa.dataFim && tarefa.estado == true) {
//   const prazo =
//     (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
//     (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());

//   const maiorUm = Math.abs(prazo) > 1 ? "dias." : "dia.";
//   tarefa.status = "Tarefa concluida no prazo.";
//   }

//   /*   const prazoTarefa =
//     (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate() -1) -
//     (dataInicio.getFullYear(), dataInicio.getMonth() + 1, dataInicio.getDate() -1);

// console.log(prazoTarefa);
// */

//   const diffEmMilissegundos = dataFim - dataInicio;

//   // Converte a diferença em dias
//   let prazoTarefa = Math.ceil(diffEmMilissegundos / (1000 * 60 * 60 * 24));

//   if (prazoTarefa < 2 && prazoTarefa != 0) {
//   prazoTarefa = prazoTarefa + " dia.";
//   } else if (prazoTarefa == 0) {
//   prazoTarefa = " Mesmo dia.";
//   } else if (prazoTarefa > 1) {
//   prazoTarefa = prazoTarefa + " dias.";
//   }

//   div.innerHTML = `
//                     <div>${tarefa.categoria == "" ? "Nenhuma Categoria" : tarefa.categoria}
//                     </div>
//                 <div class="box_flex">

//                     <p>Início: ${tarefa.dataInicio.split("-").reverse().join("/")}
//                     </p>
//                     <p><span>Previsão: ${tarefa.dataFim.split("-").reverse().join("/")}</span>
//                     </p>
//                 </div>
//                 <div class="box_flex">
//                 <span>Prazo:  ${prazoTarefa}</span>
//                 <br>
//                     <span>Concluida: ${
//                     tarefa.estado === false ? "Não concluída." : tarefa.concluida.split("-").reverse().join("/")
//                     }</span>
//                     <span>Status: ${tarefa.status}</span>
//                 </div>
//                 <div class="item-icon-nome">
//                     <h3>${tarefa.nome}</h3>
//                     <div class="item-icon">
//                         <label onclick="mudarEstado(${index})" style="${
//                         tarefa.estado === false ? "background: white;" : "background: green;"
//                         } border: 1px solid #000000; font-size: 20px; display: flex; align-items: center; justify-content: center; border-radius: 50%; width: 20px; height: 20px">
//                             <i class="fas fa-check tarefaid" style="${
//                             tarefa.estado === false ? "color: white;" : "color: green;"
//                             } background: none; font-size: 16px; border: none; border-radius: 50%;"></i>
//                         </label>
//                     </div>
//                 </div>
//                 <div class="box-tarefas-btns">
//                     <button type="button" onclick='editarTarefa(${tarefa.id},"${tarefa.nome}")'>EDITAR</button>
//                     <button type="button" onclick="delTarefa(${tarefa.id})">EXCLUIR</button>
//                 </div>
//             `;

//   containerTarefas.appendChild(div);
// });
// }


const dropdown = document.querySelectorAll(".dropdown-menu a");
const dropdownMenu = document.querySelector(".dropdown-menu");
const containerTarefas = document.querySelector(".container-tarefas");
const inputTarefas = document.querySelector("#input_tarefas");
const optionCategorias = document.querySelector("#option_categorias");
const tarefaBoxes = document.querySelector(".tarefa-boxes");
const conteudo = document.querySelector(".conteudo");

const TarefasGet = JSON.parse(localStorage.getItem("Tarefas"));

let Tarefas = TarefasGet !== null ? TarefasGet : [];

const CategoriasGet = JSON.parse(localStorage.getItem("Categorias"));

let Categorias = CategoriasGet !== null ? CategoriasGet : [];

/* funcoes */

const gerarId = () => Math.round(Math.random() * 10000000);

function obterData() {
 // Obter a data e hora atual do dispositivo
 const dataHoraAtual = new Date();

 // Formatar a data e hora para o formato correto
 const ano = dataHoraAtual.getFullYear();
 const mes = String(dataHoraAtual.getMonth() + 1).padStart(2, "0");
 const dia = String(dataHoraAtual.getDate()).padStart(2, "0");
 const horas = String(dataHoraAtual.getHours()).padStart(2, "0");
 const minutos = String(dataHoraAtual.getMinutes()).padStart(2, "0");
 const segundos = String(dataHoraAtual.getSeconds()).padStart(2, "0");
 const milisegundos = String(dataHoraAtual.getMilliseconds()).padStart(3, "0");
 const dataHoraFormatada = `${dia}/${mes}/${ano} - ${horas}:${minutos}:${segundos}:${milisegundos}`;
 // clock.innerHTML = `
 //   ${dataHoraFormatada}
 //   `;
 return dataHoraFormatada;
}
obterData();

function obterDataConclusao() {
 // Obter a data e hora atual do dispositivo
 const dataHoraAtual = new Date();

 // Formatar a data e hora para o formato correto
 const ano = dataHoraAtual.getFullYear();
 const mes = String(dataHoraAtual.getMonth() + 1).padStart(2, "0");
 const dia = String(dataHoraAtual.getDate()).padStart(2, "0");
 const horas = String(dataHoraAtual.getHours()).padStart(2, "0");
 const minutos = String(dataHoraAtual.getMinutes()).padStart(2, "0");
 const segundos = String(dataHoraAtual.getSeconds()).padStart(2, "0");
 const milisegundos = String(dataHoraAtual.getMilliseconds()).padStart(3, "0");
 const dataHoraFormatada = `${ano}-${mes}-${dia}`;
 // clock.innerHTML = `
 //   ${dataHoraFormatada}
 //   `;
 return dataHoraFormatada;
}
obterDataConclusao();


const containerTarefa = document.querySelectorAll(".container-tarefas");
const teste = ()=> containerTarefa.forEach((item, index) => {
  console.log(item);
  console.log(item.innerHTML);
});

function addCategoria() {
 const addCategoriaModal = document.querySelector("#addCategoriaModal");
 const btnFecharModal = addCategoriaModal.querySelector(".btn-close");
 const input_categorias = document.querySelector("#input_categorias");

 const nomeCat = input_categorias.value;

 if (!nomeCat) {
  alert("Digite algum nome para a nova categoria!");
  optionCategorias.value = "";
  return;
 }
 
 const categoriaExistente = Categorias.find(categoria => categoria.nome.toLocaleLowerCase() === nomeCat.trim().toLocaleLowerCase());
  if (categoriaExistente) {
    alert(`A categoria "${nomeCat.charAt(0).toUpperCase() + nomeCat.slice(1)}" já existe, digite outro nome!`);

   input_categorias.value = "";
   
   
    btnFecharModal.click();
    return;
  }
  
 const categoria = {
  id: gerarId(),
  nome: nomeCat.trim()
 };
 
 btnFecharModal.click();
 Categorias.push(categoria);
 localStorage.setItem("Categorias", JSON.stringify(Categorias));
 optionCategorias.value = "";
 nomeCat.value = "";
 
 alert("Categoria: " + nomeCat + " adicionada.");
 openCategorias();
 //verCategoria();
 categoriasDataList();
}


// Categorias.push({id: 1234567890,
//   nome: "Educação"
// });
// Categorias.push({id: 123456789,
//   nome: "Saúde"
// });

function verCategoria() {
  const categoriasdiv = () => {
    Categorias.forEach((categoria, index) => {
      let div = document.createElement("div");
      div.classList.add("container-categorias");
      div.innerHTML = ` 
        <h1>${categoria.nome == "" ? "Nenhuma" : categoria.nome}</h1>
        <div class="btns_categorias">
          <button type="button" onclick='editarCategoria(${categoria.id},"${categoria.nome}")'>EDITAR</button>
          <button type="button" onclick="delCategoria(${categoria.id})">EXCLUIR</button>
        </div>
      `;
      containerTarefas.appendChild(div);
    });
  };

  if (containerTarefas.children.length === 0) {
    categoriasdiv();
  } else {
    // Remover elementos filhos se existirem
    while (containerTarefas.firstChild) {
      containerTarefas.removeChild(containerTarefas.firstChild);
    }
  }
}

function openCategorias() {
 optionCategorias.innerHTML = `<option value="" disabled selected required>Categorias</option>
 `;
 Categorias.forEach((item, index) => {
  const option = document.createElement("option");
  option.value = item.nome;
  option.textContent = item.nome;
  optionCategorias.appendChild(option);
 });
}
openCategorias();

function categoriasDataList() {
  const categoriasList = document.querySelector("#categoriasList");
/* optionCategorias.innerHTML = `<option value="" disabled selected required>Categorias</option>
 `;*/
 categoriasList.innerHTML = ``;
 Categorias.forEach((item, index) => {
  const option = document.createElement("option");
  
  option.value = item.nome;
  // option.textContent = item.nome;
  categoriasList.appendChild(option);
 });
}
categoriasDataList();

function delCategoria(id) {
 Categorias.forEach(categoria => {
  if (categoria.id === id) {
   var confirmacao = confirm(`Tem certeza de que deseja remover a categoria ${categoria.nome}?`);
   if (confirmacao) {
    Categorias = Categorias.filter(categoria => categoria.id !== id);
    localStorage.setItem("Categorias", JSON.stringify(Categorias));
    verCategoria();
   }
  }
 });
}

function editarCategoria(id, novoNome) {
   const btnFecharModal = addCategoriaModal.querySelector(".btn-close");
  const categoriaIndex = Categorias.findIndex(categoria => categoria.id === id);
  const novoNomeTrimmed = novoNome.trim();

  if (categoriaIndex !== -1) {
    const novoNomeInput = prompt("Novo nome da categoria: ", novoNomeTrimmed);
    
    if (novoNomeInput == "") {
      alert("Digite algum nome para a nova categoria!");
      return;
    }

    const categoriaExistente = Categorias.find(categoria => categoria.nome.toLocaleLowerCase() === novoNomeInput.trim().toLocaleLowerCase());
    if (categoriaExistente && categoriaExistente.id !== id) {
      alert(`A categoria "${novoNomeInput.charAt(0).toUpperCase() + novoNomeInput.slice(1)}" já existe, digite outro nome!`);
   // btnFecharModal.click();
      return;
    }

    Categorias[categoriaIndex].nome = novoNomeInput.trim();
    localStorage.setItem("Categorias", JSON.stringify(Categorias));
    openCategorias();
    verCategoria();
  }
}
/*function editarCategoria(id, novoNome) {
 const categoriaIndex = Categorias.findIndex(categoria => categoria.id === id);
 const categoriaExistente = Categorias.find(categoria => categoria.nome === novoNome.trim());
 if (categoriaIndex !== -1) {
  Categorias[categoriaIndex].nome = prompt("Novo nome da categoria: ", novoNome).trim();
  
  if (!Categorias[categoriaIndex].nome) {
   alert("nome vazio");
   return;
  }
 

  if (categoriaExistente) {
    alert(`A Categoria ${novoNome} já existe`);
    return;
  }
  

  localStorage.setItem("Categorias", JSON.stringify(Categorias));

  openCategorias();
  verCategoria();
 }
}*/


function addTarefa() {
 const input_tarefas = document.querySelector("#input_tarefas");
 const addTarefaModal = document.querySelector("#addTarefaModal");
 const optionCategorias = document.querySelector("#option_categorias");
 const diasMes = document.querySelector("#diasMes");
 const mesMes = document.querySelector("#mesMes");
 const dataAnos = document.querySelector("#dataAnos");
 const diasMesFim = document.querySelector("#diasMesFim");
 const mesMesFim = document.querySelector("#mesMesFim");
 const dataAnosFim = document.querySelector("#dataAnosFim");
 const dataInicial = dataAnos.value + "-" + mesMes.value + "-" + diasMes.value;
 const dataFinal = dataAnosFim.value + "-" + mesMesFim.value + "-" + diasMesFim.value;
 const dataInicialBr = new Date(dataAnos.value, mesMes.value - 1, diasMes.value).toLocaleDateString("pt-BR");
 const dataFinalBr = new Date(dataAnosFim.value, mesMesFim.value - 1, diasMesFim.value).toLocaleDateString("pt-BR");

 const nomeTask = inputTarefas.value;

 if (!nomeTask) {
  alert("Digite algo");
  inputTarefas.value = "";
  return;
 }
 const tarefa = {
  id: gerarId(),
  estado: false,
  nome: nomeTask.trim(),
  categoria: optionCategorias.value,
  dataCriada: obterData(),
  dataInicio: dataInicial,
  dataFim: dataFinal,
  concluida: "",
  status: ""
 };
 const btnFecharModal = addTarefaModal.querySelector(".btn-close");
 btnFecharModal.click();
 Tarefas.push(tarefa);

 localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
 inputTarefas.value = "";
 optionCategorias.value = "";
 diasMes.value = "";
 mesMes.value = "";
 dataAnos.value = "";
 diasMesFim.value = "";
 mesMesFim.value = "";
 dataAnosFim.value = "";
 verTarefas();
}

function addCategorias(values) {
 const addCategoriaModal = document.querySelector("#addCategoriaModal");
 const btnFecharModal = addCategoriaModal.querySelector(".btn-close");
 const input_categorias = document.querySelector("#categoriasListInput");
  const categoriasListInput = document.querySelector("#categoriasListInput");

 values = input_categorias.value;

 if (!values) {
  alert("Digite algum nome para a nova categoria!");
  input_categorias.value = "";
  return;
 }
//  if (values =="") {
//   alert("Digite algum nome para a nova categoria!");
//   input_categorias.value = "";
//   return;
//  }
// console.log(values.value);
 
 const categoriaExistente = Categorias.find(categoria => categoria.nome.toLocaleLowerCase() === values.trim().toLocaleLowerCase());
  if (categoriaExistente) {
    // alert(`A categoria "${values.charAt(0).toUpperCase() + values.slice(1)}" já existe, digite outro nome!`);

   values.value = `${values}`;
   
    //btnFecharModal.click();
    return;
  }
// if (values.trim() == "") {
//   alert("Digite algum nome para a nova categoria!");
//   values.value = `${values}`;
//   return;
// }

  
 const categoria = {
  id: gerarId(),
  nome: values.trim() 
 };
 
// btnFecharModal.click();
 Categorias.push(categoria);
 localStorage.setItem("Categorias", JSON.stringify(Categorias));
 optionCategorias.value = "";
 values.value = "";
 
 alert("Categoria: " + values + " adicionada.");
// openCategorias();
 //verCategoria();
 
 categoriasDataList();
}
// function addTarefas() {
// const input_tarefa = document.querySelector("#input_tarefa");
// const addTarefaModal = document.querySelector("#addTarefaModals");
// const categoriasListInput = document.querySelector("#categoriasListInput");
// const inicio_tarefa = document.querySelector("#inicio_tarefa");
// const fim_tarefa = document.querySelector("#fim_tarefa");
 

// const nomeTask = input_tarefa.value;

// if (!nomeTask) {
//   alert("Digite algo");
//   inputTarefas.value = "";
//   return;
// }
 
//   const input_categorias = document.querySelector("#input_categorias");

// let nomeCat = categoriasListInput.value;
//   const categoriaExistente = Categorias.find(categoria => categoria.nome.toLocaleLowerCase() === nomeCat.trim().toLocaleLowerCase());
//   if (categoriaExistente) {
//   //  alert(`A categoria "${nomeCat.charAt(0).toUpperCase() + nomeCat.slice(1)}" já existe, digite outro nome!`);

//   input_categorias.value = "";
//   categoriasListInput.value = `${categoriaExistente.nome}`;
//   // console.log(categoriaExistente);
//     const tarefa = {
//   id: gerarId(),
//   estado: false,
//   nome: nomeTask.trim(),
//   categoria: categoriaExistente.nome,
//   dataCriada: obterData(),
//   dataInicio: inicio_tarefa.value,
//   dataFim: fim_tarefa.value,
//   concluida: "",
//   status: ""
// };
   
//     //btnFecharModal.click();
//     return;
//   } else {
//     const btn_add_categorias = document.querySelector("#btn_add_categorias");
//     const categoriasListInput = document.querySelector("#categoriasListInput");
//     categoriasListInput.value = `${nomeCat}`;
//     btn_add_categorias.click();
//     btn_add_categorias.addEventListener("click", addCategorias(categoriasListInput.value));
//     const tarefa = {
//   id: gerarId(),
//   estado: false,
//   nome: nomeTask.trim(),
//   categoria: categoriasListInput.value,
//   dataCriada: obterData(),
//   dataInicio: inicio_tarefa.value,
//   dataFim: fim_tarefa.value,
//   concluida: "",
//   status: ""
// };
//   }
  
 
// // const tarefa = {
// //   id: gerarId(),
// //   estado: false,
// //   nome: nomeTask.trim(),
// //   categoria: categoriaExistente.nome,
// //   dataCriada: obterData(),
// //   dataInicio: inicio_tarefa.value,
// //   dataFim: fim_tarefa.value,
// //   concluida: "",
// //   status: ""
// // };
// const btnFecharModal = addTarefaModal.querySelector(".btn-close");
// btnFecharModal.click();
// Tarefas.push(tarefa);

// localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
// inputTarefas.value = "";
// categoriasListInput.value = "";
 
// verTarefas();
// }
// console.log(addTarefaModalbtn);
// addTarefaModal.click();
    // const input_categorias = document.querySelector("#categoriasListInput");
//     const input_tarefas = document.querySelector("#input_tarefa");
 const addTarefaModalbtn = document.querySelectorAll("#addTarefaModals button");

addTarefaModalbtn.forEach((item, index) => {
  
  item.addEventListener("click", function () {
    const input_categorias = document.querySelector("#categoriasListInput");
    const input_tarefas = document.querySelector("#input_tarefa");
    input_tarefas.value = "";
    input_categorias.value = "";
   fim_tarefa.value = obterDataConclusao();
inicio_tarefa.value = obterDataConclusao();
  })
});
function addTarefas() {
  const input_tarefa = document.querySelector("#input_tarefa");
  const addTarefaModal = document.querySelector("#addTarefaModals");
  const categoriasListInput = document.querySelector("#categoriasListInput");
  const inicio_tarefa = document.querySelector("#inicio_tarefa");
  const fim_tarefa = document.querySelector("#fim_tarefa");
let dataInicioTarefa = inicio_tarefa.value;
let dataFimTarefa = fim_tarefa.value;
// console.log(calcularDiferencaEmDias( dataInicioTarefa, dataFimTarefa));
  const nomeTask = input_tarefa.value;
 
  if (addTarefaModal.classList.contains('show')) {
   // console.log(addTarefaModal.classList);
  }

  if (!nomeTask) {
    alert("Digite algo");
    input_tarefa.value = "";
    return;
  }

  const nomeCat = categoriasListInput.value.trim();
  let categoriaExistente = Categorias.find(categoria => categoria.nome.toLowerCase() === nomeCat.toLowerCase());

  if (!categoriaExistente) {
    // Se a categoria não existir, adiciona-a ao array Categorias
    
    categoriaExistente = {
      id: gerarId(),
      nome: nomeCat
    };
    Categorias.push(categoriaExistente);
    localStorage.setItem("Categorias", JSON.stringify(Categorias));
  }
  // if (nomeCat == "") {
  //   // Se a categoria não existir, adiciona-a ao array Categorias
  //   alert(nomeCat);
  //   return
  // }

if (calcularDiferencaEmDias( dataInicioTarefa, dataFimTarefa) < 0) {
  alert("Data final é menor que Data inicial!"); 
  return
};

  const tarefa = {
    id: gerarId(),
    estado: false,
    nome: nomeTask.trim(),
    categoria: categoriaExistente.nome,
    dataCriada: obterData(),
    dataInicio: inicio_tarefa.value,
    dataFim: fim_tarefa.value,
    concluida: "",
    status: ""
  };

  const btnFecharModal = addTarefaModal.querySelector(".btn-close");
 // console.log(btnFecharModal);
  btnFecharModal.click();

  Tarefas.push(tarefa);
  localStorage.setItem("Tarefas", JSON.stringify(Tarefas));

  input_tarefa.value = "";
  categoriasListInput.value = "";
  categoriasDataList();
  verTarefas();
}

function verTarefas() {

 containerTarefas.innerHTML = "";
 tarefaBoxes.innerHTML = "";

 Tarefas.forEach((tarefa, index) => {
  let div = document.createElement("div");
  div.classList.add("accordion-item");

  const DataAtual = new Date();
  const DataAtualAno = DataAtual.getFullYear();
  let DataAtualMes = DataAtual.getMonth() + 1;
  DataAtualMes = DataAtualMes < 10 ? "0" + DataAtualMes : DataAtualMes;
  let DataAtualDia = DataAtual.getDate();
  DataAtualDia = DataAtualDia < 10 ? "0" + DataAtualDia : "" + DataAtualDia;
  const DataAtualFormatada = DataAtualAno + "-" + DataAtualMes + "-" + DataAtualDia;
  let dataInicio = new Date(tarefa.dataInicio);
  let dataFim = new Date(tarefa.dataFim);

  let DataFimAno = dataFim.getFullYear();
  let DataFimMes = dataFim.getMonth() + 1;
  let DataFimDia = dataFim.getDate();
  const dataConcluida = new Date(tarefa.concluida);
  if (DataAtualFormatada > tarefa.dataFim && tarefa.estado == false) {
   const atrasada =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (DataAtual.getFullYear(), DataAtual.getMonth() + 1, DataAtual.getDate() - 1);
   const maiorUm = Math.abs(atrasada) > 1 ? " dias." : " dia.";

   tarefa.status = "Tarefa atrasada " + Math.abs(atrasada) + maiorUm;
   localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
  } else if (DataAtualFormatada < tarefa.dataFim && tarefa.estado == false) {
   const adiantada =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (DataAtual.getFullYear(), DataAtual.getMonth() + 1, DataAtual.getDate() - 1);
   const maiorUm = Math.abs(adiantada) > 1 ? " dias" : " dia";
   tarefa.status = "Tarefa " + Math.abs(adiantada) + maiorUm + " antes do prazo.";
   localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
  } else if (DataAtualFormatada == tarefa.dataFim && tarefa.estado == false) {
   const prazo =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (DataAtual.getFullYear(), DataAtual.getMonth() + 1, DataAtual.getDate());

   const maiorUm = Math.abs(prazo) > 1 ? "dias." : "dia.";
   tarefa.status = "Último dia para concluir a tarefa no prazo.";
localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
  }

  if (tarefa.concluida > tarefa.dataFim && tarefa.estado == true) {
   const atrasada =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());
   const maiorUm = Math.abs(atrasada) > 1 ? " dias." : " dia.";

   tarefa.status = "Tarefa concluida com atraso de " + Math.abs(atrasada) + maiorUm;
   localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
  } else if (tarefa.concluida < tarefa.dataFim && tarefa.estado == true) {
   const adiantada =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());
   const maiorUm = Math.abs(adiantada) > 1 ? " dias" : " dia";
   tarefa.status = "Tarefa concluida " + Math.abs(adiantada) + maiorUm + " antes do prazo.";
   localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
  } else if (tarefa.concluida == tarefa.dataFim && tarefa.estado == true) {
   const prazo =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());

   const maiorUm = Math.abs(prazo) > 1 ? "dias." : "dia.";
   tarefa.status = "Tarefa concluida no prazo.";
   localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
  }


  const diffEmMilissegundos = dataFim - dataInicio;

  // Converte a diferença em dias
  let prazoTarefa = Math.ceil(diffEmMilissegundos / (1000 * 60 * 60 * 24));

  if (prazoTarefa < 2 && prazoTarefa != 0) {
   prazoTarefa = prazoTarefa + " dia.";
  } else if (prazoTarefa == 0) {
   prazoTarefa = " Mesmo dia.";
  } else if (prazoTarefa > 1) {
   prazoTarefa = prazoTarefa + " dias.";
  }
  div.innerHTML = `
   <h2 class="accordion-header">
        <button
         class="accordion-button collapsed"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#flush-${tarefa.id}"
         aria-expanded="false"
         aria-controls="flush-${tarefa.id}"
        >
         <span style="${tarefa.estado === false ? "color: red;" : "color: green;"}
         margin: 0 12px 0 0;">
           ★
         </span> 
         ${tarefa.nome}
        </button>
       </h2>
       <div id="flush-${tarefa.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
         <div class="card" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title">
      ${tarefa.status}
    </h5>
    <h6>${tarefa.categoria == "" ? "Nenhuma Categoria" : "Categoria: " + tarefa.categoria}
    </h6>
     <p class="card-text">
      Início: ${tarefa.dataInicio.split("-").reverse().join("/")} -
      Previsao: ${tarefa.dataFim.split("-").reverse().join("/")}
      
    </p>
    <h6 class="card-subtitle mb-2 text-body-secondary">
     Prazo: ${prazoTarefa}
    </h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">
      Concluida:
      ${tarefa.estado === false ? "Não concluída. " + `${tarefa.status}` : tarefa.concluida.split("-").reverse().join("/")}
    </h6>
   
    <a class="card-link" onclick="mudarEstado(${index})">
      ${tarefa.estado === false ? "Concluir" : "Desfazer"}
    </a>
    <a class="card-link" onclick='editarTarefa(${tarefa.id},"${tarefa.nome}")'>
      Editar
    </a>
    <a class="card-link" onclick="delTarefa(${tarefa.id})">
      Excluir
    </a>
  </div>
</div>
        </div>
       </div>                  
            `;

  tarefaBoxes.appendChild(div);
 calcularStatusDaTarefa(tarefa);
 });
}
verTarefas();

function delTarefa(id) {
 Tarefas.forEach(tarefa => {
  if (tarefa.id === id) {
   var confirmacao = confirm(`Tem certeza de que deseja remover a tarefa ${tarefa.nome}?`);
   if (confirmacao) {
    Tarefas = Tarefas.filter(tarefa => tarefa.id !== id);
    localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
    verTarefas();
   }
  }
 });
}

function editarTarefa(id, novoNome) {
  const nome = novoNome.trim();
 const tarefaIndex = Tarefas.findIndex(tarefa => tarefa.id === id);
// console.log(tarefaIndex);
 if (tarefaIndex !== -1) {
  // Tarefas[tarefaIndex].nome = prompt("Novo nome tarefa: ", novoNome).trim();
   Tarefas[tarefaIndex].nome = prompt("Novo nome tarefa: ", novoNome.trim());
//  console.log(Tarefas[tarefaIndex].nome + " Tarefas");
//  console.log(novoNome + " novoNome");
//  console.log(nome + " Nome");

  // if (Tarefas[tarefaIndex].nome.trim() === "") {
  // alert("nome vazio2");
  // Tarefas[tarefaIndex].nome = prompt("Novo nome tarefa: ", novoNome.trim());
  // return;
  // }
  while (Tarefas[tarefaIndex].nome == "") {
    console.log(Tarefas[tarefaIndex].nome);
  alert("nome vazio2");
   Tarefas[tarefaIndex].nome = prompt("Novo nome tarefa: ", novoNome.trim());
   
// return;
  }
  if (!Tarefas[tarefaIndex].nome) {
    Tarefas[tarefaIndex].nome = novoNome;

   //alert("nome vazio");
   return;
  }
  }


  localStorage.setItem("Tarefas", JSON.stringify(Tarefas));

  verTarefas();
 }
 
/*function verTarefas() {

 containerTarefas.innerHTML = "";
 tarefaBoxes.innerHTML = "";

 Tarefas.forEach((tarefa, index) => {
  let div = document.createElement("div");
  div.classList.add("accordion-item");

  const DataAtual = new Date();
  const DataAtualAno = DataAtual.getFullYear();
  let DataAtualMes = DataAtual.getMonth() + 1;
  DataAtualMes = DataAtualMes < 10 ? "0" + DataAtualMes : DataAtualMes;
  let DataAtualDia = DataAtual.getDate();
  DataAtualDia = DataAtualDia < 10 ? "0" + DataAtualDia : "" + DataAtualDia;
  const DataAtualFormatada = DataAtualAno + "-" + DataAtualMes + "-" + DataAtualDia;
  let dataInicio = new Date(tarefa.dataInicio);
  let dataFim = new Date(tarefa.dataFim);

  let DataFimAno = dataFim.getFullYear();
  let DataFimMes = dataFim.getMonth() + 1;
  let DataFimDia = dataFim.getDate();
  const dataConcluida = new Date(tarefa.concluida);
  if (DataAtualFormatada > tarefa.dataFim && tarefa.estado == false) {
   const atrasada =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (DataAtual.getFullYear(), DataAtual.getMonth() + 1, DataAtual.getDate() - 1);
   const maiorUm = Math.abs(atrasada) > 1 ? " dias." : " dia.";

   tarefa.status = "Tarefa atrasada " + Math.abs(atrasada) + maiorUm;
  } else if (DataAtualFormatada < tarefa.dataFim && tarefa.estado == false) {
   const adiantada =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (DataAtual.getFullYear(), DataAtual.getMonth() + 1, DataAtual.getDate() - 1);
   const maiorUm = Math.abs(adiantada) > 1 ? " dias" : " dia";
   tarefa.status = "Tarefa " + Math.abs(adiantada) + maiorUm + " antes do prazo.";
  } else if (DataAtualFormatada == tarefa.dataFim && tarefa.estado == false) {
   const prazo =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (DataAtual.getFullYear(), DataAtual.getMonth() + 1, DataAtual.getDate());

   const maiorUm = Math.abs(prazo) > 1 ? "dias." : "dia.";
   tarefa.status = "Último dia para concluir a tarefa no prazo.";

  }

  if (tarefa.concluida > tarefa.dataFim && tarefa.estado == true) {
   const atrasada =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());
   const maiorUm = Math.abs(atrasada) > 1 ? " dias." : " dia.";

   tarefa.status = "Tarefa concluida com atraso de " + Math.abs(atrasada) + maiorUm;
  } else if (tarefa.concluida < tarefa.dataFim && tarefa.estado == true) {
   const adiantada =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());
   const maiorUm = Math.abs(adiantada) > 1 ? " dias" : " dia";
   tarefa.status = "Tarefa concluida " + Math.abs(adiantada) + maiorUm + " antes do prazo.";
  } else if (tarefa.concluida == tarefa.dataFim && tarefa.estado == true) {
   const prazo =
    (dataFim.getFullYear(), dataFim.getMonth() + 1, dataFim.getDate()) -
    (dataConcluida.getFullYear(), dataConcluida.getMonth() + 1, dataConcluida.getDate());

   const maiorUm = Math.abs(prazo) > 1 ? "dias." : "dia.";
   tarefa.status = "Tarefa concluida no prazo.";
  }


  const diffEmMilissegundos = dataFim - dataInicio;

  // Converte a diferença em dias
  let prazoTarefa = Math.ceil(diffEmMilissegundos / (1000 * 60 * 60 * 24));

  if (prazoTarefa < 2 && prazoTarefa != 0) {
   prazoTarefa = prazoTarefa + " dia.";
  } else if (prazoTarefa == 0) {
   prazoTarefa = " Mesmo dia.";
  } else if (prazoTarefa > 1) {
   prazoTarefa = prazoTarefa + " dias.";
  }
  div.innerHTML = `
   <h2 class="accordion-header">
        <button
         class="accordion-button collapsed"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#flush-${tarefa.id}"
         aria-expanded="false"
         aria-controls="flush-${tarefa.id}"
        >
         <span style="${tarefa.estado === false ? "color: red;" : "color: green;"}
         margin: 0 12px 0 0;">
           ★
         </span> 
         ${tarefa.nome}
        </button>
       </h2>
       <div id="flush-${tarefa.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
         <div class="card" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title">
      ${tarefa.status}
    </h5>
    <h6>${tarefa.categoria == "" ? "Nenhuma Categoria" : "Categoria: " + tarefa.categoria}
    </h6>
     <p class="card-text">
      Início: ${tarefa.dataInicio.split("-").reverse().join("/")} -
      Previsao: ${tarefa.dataFim.split("-").reverse().join("/")}
      
    </p>
    <h6 class="card-subtitle mb-2 text-body-secondary">
     Prazo: ${prazoTarefa}
    </h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">
      Concluida:
      ${tarefa.estado === false ? "Não concluída." : tarefa.concluida.split("-").reverse().join("/")}
    </h6>
   
    <a class="card-link" onclick="mudarEstado(${index})">
      ${tarefa.estado === false ? "Concluir" : "Desfazer"}
    </a>
    <a class="card-link" onclick='editarTarefa(${tarefa.id},"${tarefa.nome}")'>
      Editar
    </a>
    <a class="card-link" onclick="delTarefa(${tarefa.id})">
      Excluir
    </a>
  </div>
</div>
        </div>
       </div>                  
            `;

  tarefaBoxes.appendChild(div);
 });
}*/
/*function verTarefa() {
  const originalCategorias = [...Categorias]; // Faz uma cópia do array original

  // O resto do seu código aqui...

  // Verifica se alguma categoria foi editada ou excluída
  originalCategorias.forEach(originalCategoria => {
    const categoriaEditada = Categorias.find(categoria => categoria.id === originalCategoria.id && categoria.nome !== originalCategoria.nome);
    if (categoriaEditada) {
      alert(`A categoria "${originalCategoria.nome}" foi editada para "${categoriaEditada.nome}".`);
    }

    const categoriaExcluida = !Categorias.some(categoria => categoria.id === originalCategoria.id);
    if (categoriaExcluida) {
      alert(`A categoria "${originalCategoria.nome}" foi excluída.`);
    }
  });

  // O resto do seu código...

  Tarefas.forEach((tarefa, index) => {
    let div = document.createElement("div");
    div.classList.add("accordion-item");

    // Restante do seu código...

    const categoriaEditada = originalCategorias.find(categoria => categoria.id === tarefa.categoria && categoria.nome !== tarefa.categoria);
    if (categoriaEditada) {
      div.innerHTML += `<p>Categoria editada: "${categoriaEditada.nome}"</p>`;
    }

    const categoriaExcluida = !originalCategorias.some(categoria => categoria.id === tarefa.categoria);
    if (categoriaExcluida) {
      div.innerHTML += `<p>Categoria excluída</p>`;
    }

    // Restante do seu código...
  });
}*/


// function mudarEstado(index) {
// Tarefas[index].estado = !Tarefas[index].estado;
// Tarefas[index].estado === false ? (Tarefas[index].concluida = "") : (Tarefas[index].concluida = obterDataConclusao());
// localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
// verTarefas();
// }

// function mudarEstado(index) {
//   // Atualiza o estado da tarefa
//   Tarefas[index].estado = !Tarefas[index].estado;

//   // Lógica para definir a data de conclusão se a tarefa estiver sendo marcada como concluída
//   if (Tarefas[index].estado === true) {
//     Tarefas[index].concluida = obterDataConclusao();
//   } else {
//     Tarefas[index].concluida = "";
//   }

//   // Recalcula e atualiza o status da tarefa
//   const tarefa = Tarefas[index];
//   const status = calcularStatusDaTarefa(tarefa); // Função para calcular o status da tarefa
//   Tarefas[index].status = status;

//   // Salva as alterações no armazenamento local
//   localStorage.setItem("Tarefas", JSON.stringify(Tarefas));

//   // Atualiza a visualização das tarefas na interface do usuário
//   verTarefas();
// }

// function calcularStatusDaTarefa(tarefa) {
//   const DataAtual = new Date();
//   const DataAtualFormatada = DataAtual.toISOString().slice(0, 10);

//   let status = "";

//   if (tarefa.estado === false) {
//     if (DataAtualFormatada > tarefa.dataFim) {
//       status = `Tarefa atrasada`;
//     } else if (DataAtualFormatada < tarefa.dataFim) {
//       status = `Tarefa dentro do prazo`;
//     } else {
//       status = `Último dia para concluir a tarefa`;
//     }
//   } else {
//     if (tarefa.concluida === "") {
//       status = `Tarefa concluída`;
//     } else {
//       const dataConcluida = new Date(tarefa.concluida);
//       if (dataConcluida > tarefa.dataFim) {
//         status = `Tarefa concluída com atraso`;
//       } else if (dataConcluida < tarefa.dataFim) {
//         status = `Tarefa concluída antes do prazo`;
//       } else {
//         status = `Tarefa concluída no prazo`;
//       }
//     }
//   }

//   return status;
// }
// Tarefas.push({
//   categoria: "C",
// concluida: "2024-03-10",
// dataCriada: "10/03/2024 - 00:21:56:791",
// dataFim: "2024-03-06",
// dataInicio: "2024-03-01",
// estado: true,
// id: 761595276,
// nome: "A 4 dias",
// status: "Tarefa concluída com atraso de 1 dia(s)"
// })
function calcularDiferencaEmDias(data1, data2) {
  const diffEmMilissegundos = new Date(data2) - new Date(data1);
  return Math.ceil(diffEmMilissegundos / (1000 * 60 * 60 * 24));
}

// function calcularStatusDaTarefa(tarefa) {
//   const DataAtual = new Date();
//   const DataAtualFormatada = DataAtual.toISOString().slice(0, 10);
  

//   let status = "";

//   if (tarefa.estado === false) {
//     if (DataAtualFormatada > tarefa.dataFim) {
//       status = `Tarefa atrasada`;
//     } else if (DataAtualFormatada < tarefa.dataFim) {
//       status = `Tarefa dentro do prazo`;
//     } else {
//       status = `Último dia para concluir a tarefa`;
//     }
//   } else {
//     if (tarefa.concluida === "") {
//       status = `Tarefa concluída`;
//     } else {
//       const diasDeAtraso = calcularDiferencaEmDias(tarefa.dataFim, tarefa.concluida);
//       const diasAntesDoPrazo = calcularDiferencaEmDias(tarefa.concluida, tarefa.dataFim);
// /*
// let maiorQueUmAtraso = diasDeAtraso;
// let maiorQueUmAntes = diasAntesDoPrazo;
// if (maiorQueUmAtraso < 2 && maiorQueUmAtraso > 0) {
//   maiorQueUmAtraso = "dia";
// } else if (maiorQueUmAtraso > 1) {
//   maiorQueUmAtraso = "dias";
// } else if (maiorQueUmAtraso == 0) {
//   maiorQueUmAtraso = "Mesmo Dia";
// }
// if (maiorQueUmAntes < 2 && maiorQueUmAntes > 0) {
//   maiorQueUmAtraso = "dia";
// } else if (maiorQueUmAntes > 1) {
//   maiorQueUmAtraso = "dias";
// } else if (maiorQueUmAntes == 0) {
//   maiorQueUmAtraso = "Mesmo Dia";
// }*/
//       if (diasDeAtraso > 0) {
//         status = `Tarefa concluída com atraso de ${diasDeAtraso} dia(s)`;
//       } else if (diasAntesDoPrazo > 0) {
//         status = `Tarefa concluída ${diasAntesDoPrazo}  dia(s) antes do prazo`;
//       } else {
//         status = `Tarefa concluída no prazo`;
//       }
//     }
//   }

//   return status;
// }
// function calcularStatusDaTarefa(tarefa) {
//   const DataAtual = new Date();
//   const DataAtualizada = obterDataConclusao();
//   const DataAtualFormatada = DataAtual.toISOString().slice(0, 10);
  

//   let status = "";
 
  
//   let prazos = 0;
 
  

//   if (tarefa.estado === false) {
//     if (DataAtualizada > tarefa.dataFim) {
//       prazos = calcularDiferencaEmDias(DataAtualizada, tarefa.dataFim);
//       console.log(prazos);
//       status = `Tarefa atrasada ${Math.abs(prazos)}`;
//     } else if (DataAtualizada < tarefa.dataFim) {
//       prazos = calcularDiferencaEmDias( tarefa.dataFim, DataAtualizada);
//       console.log(prazos);
//       status = `Tarefa dentro do prazo`;
//     } else {
//       status = `Último dia para concluir a tarefa`;
//     }
//   } else {
//     if (tarefa.concluida === "") {
//       status = `Tarefa concluída`;
//     } else {
//       const diasDeAtraso = calcularDiferencaEmDias(tarefa.dataFim, tarefa.concluida);
//       const diasAntesDoPrazo = calcularDiferencaEmDias(tarefa.concluida, tarefa.dataFim);
// /*
// let maiorQueUmAtraso = diasDeAtraso;
// let maiorQueUmAntes = diasAntesDoPrazo;
// if (maiorQueUmAtraso < 2 && maiorQueUmAtraso > 0) {
//   maiorQueUmAtraso = "dia";
// } else if (maiorQueUmAtraso > 1) {
//   maiorQueUmAtraso = "dias";
// } else if (maiorQueUmAtraso == 0) {
//   maiorQueUmAtraso = "Mesmo Dia";
// }
// if (maiorQueUmAntes < 2 && maiorQueUmAntes > 0) {
//   maiorQueUmAtraso = "dia";
// } else if (maiorQueUmAntes > 1) {
//   maiorQueUmAtraso = "dias";
// } else if (maiorQueUmAntes == 0) {
//   maiorQueUmAtraso = "Mesmo Dia";
// }*/
//       if (diasDeAtraso > 0) {
//         status = `Tarefa concluída com atraso de ${diasDeAtraso} dia(s)`;
//       } else if (diasAntesDoPrazo > 0) {
//         status = `Tarefa concluída ${diasAntesDoPrazo}  dia(s) antes do prazo`;
//       } else {
//         status = `Tarefa concluída no prazo`;
//       }
//     }
//   }

//   return status;
// }
function calcularStatusDaTarefa(tarefa) {
  const DataAtual = new Date();
  const DataAtualAno = DataAtual.getFullYear();
  let DataAtualMes = DataAtual.getMonth() + 1;
  DataAtualMes = DataAtualMes < 10 ? "0" + DataAtualMes : DataAtualMes;
  let DataAtualDia = DataAtual.getDate();
  DataAtualDia = DataAtualDia < 10 ? "0" + DataAtualDia : "" + DataAtualDia;
  const DataAtualFormatada = DataAtualAno + "-" + DataAtualMes + "-" + DataAtualDia;

  let dataInicio = new Date(tarefa.dataInicio);
  let dataFim = new Date(tarefa.dataFim);
  const dataConcluida = new Date(tarefa.concluida || tarefa.dataFim);

  let status = "";

  if (DataAtualFormatada > tarefa.dataFim && !tarefa.estado) {
    const atrasada = Math.ceil((DataAtual - dataFim) / (1000 * 60 * 60 * 24));
    const maiorUm = Math.abs(atrasada) > 1 ? " dias." : " dia.";
    status = "Tarefa atrasada " + Math.abs(atrasada) + maiorUm;
  } else if (DataAtualFormatada < tarefa.dataFim && !tarefa.estado) {
    const adiantada = Math.ceil((dataFim - DataAtual) / (1000 * 60 * 60 * 24));
    const maiorUm = Math.abs(adiantada) > 1 ? " dias." : " dia.";
    status = "Tarefa " + Math.abs(adiantada) + maiorUm + " antes do prazo.";
  } else if (DataAtualFormatada === tarefa.dataFim && !tarefa.estado) {
    status = "Último dia para concluir a tarefa no prazo.";
  } else if (dataConcluida > tarefa.dataFim && tarefa.estado) {
    const atrasada = Math.ceil((dataConcluida - dataFim) / (1000 * 60 * 60 * 24));
    const maiorUm = Math.abs(atrasada) > 1 ? " dias." : " dia.";
    status = "Tarefa concluída com atraso de " + Math.abs(atrasada) + maiorUm;
  } else if (dataConcluida < tarefa.dataFim && tarefa.estado) {
    const adiantada = Math.ceil((dataFim - dataConcluida) / (1000 * 60 * 60 * 24));
    const maiorUm = Math.abs(adiantada) > 1 ? " dias." : " dia.";
    status = "Tarefa concluída " + Math.abs(adiantada) + maiorUm + " antes do prazo.";
  } else if (dataConcluida === tarefa.dataFim && tarefa.estado) {
    status = "Tarefa concluída no prazo.";
  }

  let prazoTarefa = Math.ceil((dataFim - dataInicio) / (1000 * 60 * 60 * 24));

  if (prazoTarefa < 2 && prazoTarefa !== 0) {
    prazoTarefa = prazoTarefa + " dia.";
  } else if (prazoTarefa === 0) {
    prazoTarefa = " Mesmo dia.";
  } else if (prazoTarefa > 1) {
    prazoTarefa = prazoTarefa + " dias.";
  }

  return status;
}


// calcularStatusDaTarefa();
function mudarEstado(index) {
  // Atualiza o estado da tarefa
  Tarefas[index].estado = !Tarefas[index].estado;

  // Lógica para definir a data de conclusão se a tarefa estiver sendo marcada como concluída
  if (Tarefas[index].estado === true) {
    Tarefas[index].concluida = obterDataConclusao();
     
  } else {
    Tarefas[index].concluida = "";
     
  }

  // Recalcula e atualiza o status da tarefa
  const tarefa = Tarefas[index];
  const status = calcularStatusDaTarefa(tarefa); 
  
  Tarefas[index].status = status;

  // Salva as alterações no armazenamento local
  localStorage.setItem("Tarefas", JSON.stringify(Tarefas));

  // Atualiza a visualização das tarefas na interface do usuário
  verTarefas();
}




function openDiasMes() {
 const diasMes = document.querySelector("#diasMes");
 const diasMesFim = document.querySelector("#diasMesFim");
 // const dataTransacaoDia = document.querySelector("#dataTransacaoDia");
 diasMes.innerHTML = `<option value="" disabled selected required>Dia</option>`;
 for (let i = 1; i < 32; i++) {
  const option = document.createElement("option");
  option.length = 31;
  option.value = i < 10 ? "0" + i : "" + i;
  option.textContent = i < 10 ? "0" + i : "" + i;
  diasMes.appendChild(option);
 }
 diasMesFim.innerHTML = `<option value="" disabled selected required>Dia</option>`;
 for (let i = 1; i < 32; i++) {
  const option = document.createElement("option");
  option.length = 31;
  option.value = i < 10 ? "0" + i : "" + i;
  option.textContent = i < 10 ? "0" + i : "" + i;
  diasMesFim.appendChild(option);
 }
}
openDiasMes();

function openDataAnos() {
 const dataAnos = document.querySelector("#dataAnos");
 const dataAnosFim = document.querySelector("#dataAnosFim");
 dataAnos.innerHTML = `<option value="" disabled selected required>Ano</option>`;

 for (let i = 2024; i >= 1900; i--) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  dataAnos.appendChild(option);
 }
 dataAnosFim.innerHTML = `<option value="" disabled selected required>Ano</option>`;

 for (let i = 2024; i >= 1900; i--) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  dataAnosFim.appendChild(option);
 }
}
openDataAnos();

function openDataHoje() {
 const data_hoje = document.querySelector("#data_hoje");
 data_hoje.innerHTML = `<option value="" disabled selected required>Hoje</option>`;

  const option = document.createElement("option");
  option.value = obterDataConclusao().split("-").reverse().join("/");
  option.textContent = obterDataConclusao().split("-").reverse().join("/");
  data_hoje.appendChild(option);

}
openDataHoje();

window.addEventListener("scroll", function () {
 var header = document.querySelector(".header");
 var scrollPosition = window.scrollY;
 if (scrollPosition > 0) {
  header.classList.add("scrolled");
  document.body.style.marginTop = header.offsetHeight + "px";
  dropdown.forEach((item, index) => {
   item.style.color = "#000";
  });
 } else {
  header.classList.remove("scrolled");
  document.body.style.marginTop = 0;
 }
});
const fim_tarefa = document.querySelector("#fim_tarefa");
const inicio_tarefa = document.querySelector("#inicio_tarefa");
fim_tarefa.value = obterDataConclusao();
inicio_tarefa.value = obterDataConclusao();
const data_hoje_inputs = new Date().toLocaleDateString();

 /* fim_tarefa.value = data_hoje_inputs;
  fim_tarefa.textContent = data_hoje_inputs;

console.log(fim_tarefa.value + " fim_tarefa value");
console.log(fim_tarefa.textContent, "fim_tarefa textContent");
console.log(data_hoje_inputs, "data_hoje_inputs");
console.log(fim_tarefa, "fim_tarefa");*/

// fim_tarefa.addEventListener("input", function () {
  
//   console.log(fim_tarefa);
// })