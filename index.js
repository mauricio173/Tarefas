
const dropdown = document.querySelectorAll(".dropdown-menu a");
const dropdownMenu = document.querySelector(".dropdown-menu");
const containerTarefas = document.querySelector(".container-tarefas");
const inputTarefa = document.querySelector("#input_tarefa");
const optionCategorias = document.querySelector("#option_categorias");
const tarefaBoxes = document.querySelector(".tarefa-boxes");
const conteudo = document.querySelector(".conteudo");
const inicio_tarefa = document.querySelector("#inicio_tarefa");
const fim_tarefa = document.querySelector("#fim_tarefa");
const input_categorias = document.querySelector("#categoriasListInput");

const TarefasGet = JSON.parse(localStorage.getItem("Tarefas"));

let Tarefas = TarefasGet !== null ? TarefasGet : [];

const CategoriasGet = JSON.parse(localStorage.getItem("Categorias"));

let Categorias = CategoriasGet !== null ? CategoriasGet : [];

/* funcoes */

// function setarData() {
//   let elementoData = document.querySelector(".js-data");
// 
//   let data = new Date();
// 
//   const objData = {
//     year: "numeric",
//     month: "long",
//     weekday: "long",
//     day: "numeric",
//   };
// 
//   elementoData.textContent = data.toLocaleTimeString("pt-BR", objData);
// }
// setarData();
// setInterval(() => {
//   setarData();
// }, 1000);

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
 
 return dataHoraFormatada;
}
obterDataConclusao();

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
// openCategorias();
 //verCategoria();
 categoriasDataList();
}

function verCategoria() {
  const categoriasdiv = () => {
    Categorias.forEach((categoria, index) => {
      let div = document.createElement("div");
      div.classList.add("container-categorias");
      if (categoria.nome == "") {
        div.style="display: none";
        
      }
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
  // const btnFecharModal = addCategoriaModal.querySelector(".btn-close");
   const btnFecharModal = document.querySelector(".btn-close");
  const categoriaIndex = Categorias.findIndex(categoria => categoria.id === id);
  const novoNomeTrimmed = novoNome.trim();

  if (categoriaIndex !== -1) {
    const novoNomeInput = prompt("Novo nome da categoria: ", novoNomeTrimmed);
    
    if (novoNomeInput == "") {
      alert("Digite algum nome para a nova categoria!");
      return;
    }

    const categoriaExistente = Categorias.find(categoria => categoria.nome.toLocaleLowerCase() === novoNomeInput.trim().toLocaleLowerCase());
    // console.log(categoriaExistente);
    if (categoriaExistente && categoriaExistente.id == id) {
      alert(`A categoria "${novoNomeInput.charAt(0).toUpperCase() + novoNomeInput.slice(1)}" já existe, digite outro nome!`);
   // btnFecharModal.click();
      return;
    }

     Categorias[categoriaIndex].nome = novoNomeInput.trim();
    // console.log(Categorias[categoriaIndex].nome + " categoriaIndex");
    // console.log(novoNomeInput + " novoNomeInput");
    
    localStorage.setItem("Categorias", JSON.stringify(Categorias));
    verCategoria();
    categoriasDataList();
  }
}

function categoriasDataList() {
  const categoriasList = document.querySelector("#categoriasList");
 categoriasList.innerHTML = ``;
 Categorias.forEach((item, index) => {
  const option = document.createElement("option");
  
  option.value = item.nome;
  categoriasList.appendChild(option);
 });
  const categoriasLists = document.querySelector("#categoriasLists");
 categoriasLists.innerHTML = ``;
 Categorias.forEach((item, index) => {
  const option = document.createElement("option");
  
  option.value = item.nome;
  categoriasLists.appendChild(option);
 });
}
categoriasDataList();


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

function functionName() {
  
}
functionName();

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const toastHeader = document.querySelector(".toast-header small");


function popCatData() {
   const DataAtual = new Date();
  const DataAtualAno = DataAtual.getFullYear();
  let DataAtualMes = DataAtual.getMonth() + 1;
  DataAtualMes = DataAtualMes < 10 ? "0" + DataAtualMes : DataAtualMes;
  let DataAtualDia = DataAtual.getDate();
  DataAtualDia = DataAtualDia < 10 ? "0" + DataAtualDia : "" + DataAtualDia;
  const DataAtualFormatada = DataAtualDia + "-" + DataAtualMes + "-" + DataAtualAno;
  return DataAtualFormatada;
}

function popCat() {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBootstrap.show()
  if (toastLiveExample.classList[2] == "show") {
  toastHeader.innerHTML =`${popCatData()}`;
// console.log(toastHeader);
}
  
}
// popCat();

// if (toastTrigger) {
//   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
//   toastTrigger.addEventListener('click', () => {
//     toastBootstrap.show()
//   })
// }

function clickButton() {
   const click_event = new CustomEvent('click');
   const btn_element = document.querySelector('#tooltipCat');
   
   // console.log(btn_element.dispatchEvent(click_event));
    
     if (btn_element.dispatchEvent(click_event) == false) {
     btn_element.dispatchEvent(click_event);
    // btn_element.click();
       // btn_element.setAttribute("aria-describedby", "tooltip115276")
     }
    //  aria-describedby="tooltip115276"
}
// clickButton();

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()




function addTarefas() {
  const inputTarefas = document.querySelector("#input_tarefa");
  // const input_tarefa = document.querySelector("#input_tarefa");
  const addTarefaModal = document.querySelector("#addTarefaModals");
  const categoriasListInput = document.querySelector("#categoriasListInput");
  const inicio_tarefa = document.querySelector("#inicio_tarefa");
  const fim_tarefa = document.querySelector("#fim_tarefa");
let dataInicioTarefa = inicio_tarefa.value;
let dataFimTarefa = fim_tarefa.value;
  // const nomeTask = input_tarefa.value;
  const nomeTask = inputTarefas.value;
 

    const tooltipCat = document.querySelector("#tooltipCat");
  if (!nomeTask) {
   // clickButton();
     tooltipCat.click();
    inputTarefas.value = "";
    return;
  }

  // if (categoriasListInput.value.trim() == "") {
  // const checkCat = document.querySelector("#checkCat");
  //   checkCat.click();
    
  //   alert("Digite um nome para a categoria!");
  //   categoriasListInput.value = "";
  //   return;
  // }

  if (categoriasListInput.value.trim() == "") {
  const checkCat = document.querySelector("#checkCat");
    // checkCat.click();
    const btnFecharModals = addTarefaModal.querySelector(".btn-close");
  // btnFecharModals.click();
  
 popCat();
    
    categoriasListInput.value = "";
    return;
  }

  const nomeCat = categoriasListInput.value.trim();
  let categoriaExistente = Categorias.find(categoria => categoria.nome.toLowerCase() === nomeCat.toLowerCase());

  if (!categoriaExistente) {
    // Se a categoria não existir, adiciona-a ao array Categorias
    alert("Nova categoria adicionada!")
    categoriaExistente = {
      id: gerarId(),
      nome: nomeCat
    };
    Categorias.push(categoriaExistente);
    localStorage.setItem("Categorias", JSON.stringify(Categorias));
  }

if (calcularDiferencaEmDias( dataInicioTarefa, dataFimTarefa) < 0) {
  alert("Data final é menor que Data inicial!"); 
  return
};


  const tarefa = {
    id: gerarId(),
    estado: false,
    nome: nomeTask.trim(),
     categoria: categoriaExistente.nome,
    // categoria: nomeCat,
    dataCriada: obterData(),
    dataInicio: inicio_tarefa.value,
    dataFim: fim_tarefa.value,
    concluida: "",
    status: ""
  };

   const btnFecharModals = addTarefaModal.querySelector(".btn-close");
  btnFecharModals.click();

  Tarefas.push(tarefa);
  localStorage.setItem("Tarefas", JSON.stringify(Tarefas));

  inputTarefas.value = "";
  categoriasListInput.value = "";
  categoriasDataList();
  verTarefas();
}

function clearForm() {
  const form_tarefa = document.querySelector("#form_tarefa");
  //const invalidCheck = document.querySelector("#invalidCheck");
//  invalidCheck.checked = false;
   form_tarefa.classList.remove("was-validated");
}

function clearFormInputs() {
  const inputTarefas = document.querySelector("#validationCustom01");
  const categoriasListInput = document.querySelector("#validationCustom02");
  const iniciotarefa = document.querySelector("#dataInicial");
  const fimtarefa = document.querySelector("#dataFinal");

fimtarefa.value = obterDataConclusao();
iniciotarefa.value = obterDataConclusao();
categoriasDataList();
  inputTarefas.value = "";
  categoriasListInput.value = "";
  //const invalidCheck = document.querySelector("#invalidCheck");
//  invalidCheck.checked = false;
   form_tarefa.classList.remove("was-validated");
}

document.addEventListener('DOMContentLoaded', function() {
  const linkTopo = document.getElementById('linkTopo');
const addTarefaModaisLink = document.querySelector("#addTarefaModaisLink");
  addTarefaModaisLink.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    
    // Rola suavemente até o topo da página
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

function addNovaTarefa() {
  // const input_tarefa = document.querySelector("#input_tarefa");
  const inputTarefas = document.querySelector("#validationCustom01");
  const addTarefaModal = document.querySelector("#addTarefaModais");
  const categoriasListInput = document.querySelector("#validationCustom02");
  const inicio_tarefa = document.querySelector("#dataInicial");
  const fim_tarefa = document.querySelector("#dataFinal");


let dataInicioTarefa = inicio_tarefa.value;
let dataFimTarefa = fim_tarefa.value;
  const nomeTask = inputTarefas.value;
 

    const tooltipCat = document.querySelector("#tooltipCat");
  if (!nomeTask) {
   // clickButton();
     tooltipCat.click();
    inputTarefas.value = "";
    return;
  }


  if (categoriasListInput.value.trim() == "") {
  const checkCat = document.querySelector("#checkCat");
    // checkCat.click();
    const btnFecharModals = addTarefaModal.querySelector(".btn-close");
  // btnFecharModals.click();
  
 popCat();
    
    categoriasListInput.value = "";
    return;
  }

  const nomeCat = categoriasListInput.value.trim();
  let categoriaExistente = Categorias.find(categoria => categoria.nome.toLowerCase() === nomeCat.toLowerCase());

  if (!categoriaExistente) {
    // Se a categoria não existir, adiciona-a ao array Categorias
    alert("Categoria " + nomeCat + " adicionada!")
    categoriaExistente = {
      id: gerarId(),
      nome: nomeCat
    };
    Categorias.push(categoriaExistente);
    localStorage.setItem("Categorias", JSON.stringify(Categorias));
  }

if (calcularDiferencaEmDias( dataInicioTarefa, dataFimTarefa) < 0) {
  alert("Data final é menor que Data inicial!");
  

fimtarefa.value = obterDataConclusao();
iniciotarefa.value = obterDataConclusao();
  event.preventDefault();
  return;
};


  const tarefa = {
    id: gerarId(),
    estado: false,
    nome: nomeTask.trim(),
     categoria: categoriaExistente.nome,
    // categoria: nomeCat,
    dataCriada: obterData(),
    dataInicio: inicio_tarefa.value,
    dataFim: fim_tarefa.value,
    concluida: "",
    status: ""
  };

   const btnFecharModals = addTarefaModais.querySelector(".btn-close");
   const form_tarefa = document.querySelector("#form_tarefa");
   clearForm();
   clearFormInputs();

  Tarefas.push(tarefa);
  localStorage.setItem("Tarefas", JSON.stringify(Tarefas));

  btnFecharModals.click();
  inputTarefas.value = "";
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
      ${tarefa.estado === false ? "Não concluída. " + `${tarefa.status}` : tarefa.concluida.split("-").reverse().join("/") + ". " + tarefa.status}
    </h6>
   
    <a class="card-link" onclick="mudarEstado(${index})">
      ${tarefa.estado === false ? "Concluir" : "Desfazer"}
    </a>
   
    
    <a class="card-link" onclick='edtTarefa(${tarefa.id}, event)'>
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
 if (tarefaIndex !== -1) {
   Tarefas[tarefaIndex].nome = prompt("Novo nome tarefa: ", novoNome.trim());
  while (Tarefas[tarefaIndex].nome == "") {
 console.log(Tarefas[tarefaIndex].nome);
  alert("nome vazio2");
   Tarefas[tarefaIndex].nome = prompt("Novo nome tarefa: ", novoNome.trim());
   
  }
  if (!Tarefas[tarefaIndex].nome) {
    Tarefas[tarefaIndex].nome = novoNome;

   //alert("nome vazio");
   return;
  }
  
  /*
    var today = new Date();
    var ano = today.getFullYear();
    var mes = today.getMonth()+1;
    var dia = today.getDate();
  var mess =  mes < 10 ? "0" + mes : "" + mes;
  var diaa =   dia < 10 ? "0" + dia : "" + dia;
  */
  
 /* let inicialData = Tarefas[tarefaIndex].dataInicio.split("/").reverse().join("-");
  let inicialDataStorage = Tarefas[tarefaIndex].dataInicio.split("/").reverse().join("-");
  Tarefas[tarefaIndex].dataInicio = prompt("Data inicial: ", Tarefas[tarefaIndex].dataInicio.split("-").reverse().join("/"));
  console.log(inicialData + " inicialData");
   Tarefas[tarefaIndex].dataInicio = prompt("Data inicial: ", diaa+"/"+mess+"/"+ano).split("/").reverse().join("-");*/
   
   let dia_inicio = Tarefas[tarefaIndex].dataInicio.slice(8, 11);
   let mes_inicio = Tarefas[tarefaIndex].dataInicio.slice(5, 7);
   let ano_inicio = Tarefas[tarefaIndex].dataInicio.slice(0, 4);

   let dia_fim = Tarefas[tarefaIndex].dataFim.slice(8, 11);
   let mes_fim = Tarefas[tarefaIndex].dataFim.slice(5, 7);
   let ano_fim = Tarefas[tarefaIndex].dataFim.slice(0, 4);
   
   var TarefasDataInicio = prompt("Data inicial: ", Tarefas[tarefaIndex].dataInicio.slice(8, 11)+"/"+Tarefas[tarefaIndex].dataInicio.slice(5, 7)+"/"+Tarefas[tarefaIndex].dataInicio.slice(0, 4));
   
   var TarefasDataFim = prompt("Data final: ", Tarefas[tarefaIndex].dataFim.slice(8, 11)+"/"+Tarefas[tarefaIndex].dataFim.slice(5, 7)+"/"+Tarefas[tarefaIndex].dataFim.slice(0, 4));
   
  // if (calcularDiferencaEmDias( TarefasDataInicio.split("/").reverse().join("-"), TarefasDataFim.split("/").reverse().join("-")) < 0 || !TarefasDataInicio || !TarefasDataFim) {
  //   alert("Data final é menor que Data inicial!");
  //   console.log(TarefasDataInicio.split("/").reverse().join("-"));
  //   console.log(TarefasDataFim.split("/").reverse().join("-"));
  //   return;
  // }
     
   if (calcularDiferencaEmDias( Tarefas[tarefaIndex].dataInicio, Tarefas[tarefaIndex].dataFim) < 0 || !TarefasDataInicio || !TarefasDataFim) {
     alert("Data final é menor que Data inicial!");
    
     return;
   } else {
   //   TarefasDataInicio = TarefasDataInicio.split("/").reverse().join("-");
//      TarefasDataFim = TarefasDataFim.split("/").reverse().join("-");
     Tarefas[tarefaIndex].dataInicio = TarefasDataInicio.split("/").reverse().join("-");
     Tarefas[tarefaIndex].dataFim = TarefasDataFim.split("/").reverse().join("-");
    
     localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
     verTarefas();
   }
   /*original */
   /*
   
   Tarefas[tarefaIndex].dataInicio = prompt("Data inicial: ", Tarefas[tarefaIndex].dataInicio.slice(8, 11)+"/"+Tarefas[tarefaIndex].dataInicio.slice(5, 7)+"/"+Tarefas[tarefaIndex].dataInicio.slice(0, 4)).split("/").reverse().join("-");
   
  Tarefas[tarefaIndex].dataFim = prompt("Data final: ", Tarefas[tarefaIndex].dataFim.slice(8, 11)+"/"+Tarefas[tarefaIndex].dataFim.slice(5, 7)+"/"+Tarefas[tarefaIndex].dataFim.slice(0, 4)).split("/").reverse().join("-");
  
   */
  
  
  /*
  const task = Tarefas[tarefaIndex].dataFim;
  console.log(task);
  console.log(task.split("-").reverse().join("/"));
  console.log(task.slice(0, 4));
  console.log(task.slice(5, 7));
  console.log(task.slice(8, 11));
  */
  
 /*
 let taskFim =  Tarefas[tarefaIndex].dataFim;
 taskFim = prompt("Data finals: ", Tarefas[tarefaIndex].dataFim.slice(8, 11)+"/"+Tarefas[tarefaIndex].dataFim.slice(5, 7)+"/"+Tarefas[tarefaIndex].dataFim.slice(0, 4)).split("/").reverse().join("-");
 console.log(taskFim + " taskFim");
 let taskFim =  Tarefas[tarefaIndex].dataFim;
  let taskFinal = prompt("Data finals: ", Tarefas[tarefaIndex].dataFim.slice(8, 11)+"/"+Tarefas[tarefaIndex].dataFim.slice(5, 7)+"/"+Tarefas[tarefaIndex].dataFim.slice(0, 4)).split("/").reverse().join("-");
    console.log(taskFim + " taskFim");
    console.log(taskFinal + " taskFinal");
  if (!taskFinal) {
    alert(taskFinal);
  }*/
  
//   if (calcularDiferencaEmDias( Tarefas[tarefaIndex].dataInicio, Tarefas[tarefaIndex].dataFim) < 0) {
//     alert("Data final é menor que Data inicial!");
//    /*Tarefas[tarefaIndex].dataInicio = prompt("Data inicial: ", Tarefas[tarefaIndex].dataInicio.slice(8, 11)+"/"+Tarefas[tarefaIndex].dataInicio.slice(5, 7)+"/"+Tarefas[tarefaIndex].dataInicio.slice(0, 4)).split("/").reverse().join("-");
//  
//   Tarefas[tarefaIndex].dataFim = prompt("Data final: ", Tarefas[tarefaIndex].dataFim.slice(8, 11)+"/"+Tarefas[tarefaIndex].dataFim.slice(5, 7)+"/"+Tarefas[tarefaIndex].dataFim.slice(0, 4)).split("/").reverse().join("-");*/
//   return;
// };
  }
  
/*
  if (calcularDiferencaEmDias( Tarefas[tarefaIndex].dataInicio, Tarefas[tarefaIndex].dataFim) < 0) {
  alert("Data final é menor que Data inicial!");
  

// fimtarefa.value = obterDataConclusao();
// iniciotarefa.value = obterDataConclusao();
//   event.preventDefault();
  return;
};

    var today = new Date();
    var date = prompt("Please enter date.", today.getDate()+"-"+monthNames[today.getMonth()]+"-"+today.getFullYear());

*/

  verTarefas();
 }

function editaTarefa(id) {
  event.preventDefault();
  const tarefaIndex = Tarefas.findIndex(tarefa => tarefa.id === id);
  
  // Obter os valores dos campos do formulário
  const nome = document.querySelector("#nome_tarefa").value.trim();
  const categoria = document.querySelector("#nome_categoria").value.trim();
  let dataInicio = document.querySelector("#dataInicials").value;
  let dataFim = document.querySelector("#dataFinals").value;
  let dataInicial = dataInicio;
  let dataFinal = dataFim;
  // Validar datas
  if (calcularDiferencaEmDias(dataInicio, dataFim) < 0) {
    alert("Data final é menor que a data inicial!");
    // Definir a data inicial como um dia antes da data final
    const dataFinalMenosUmDia = new Date(dataFim);
    dataFinalMenosUmDia.setDate(dataFinalMenosUmDia.getDate() - 1);
    dataInicio = dataFinalMenosUmDia.toISOString().split('T')[0]; // Formatar a data para o formato yyyy-mm-dd
    
    // Atualizar o campo de entrada da data inicial
    document.querySelector("#dataInicials").value = dataInicio;
    
    return; // Não envia o formulário se a validação falhar
  }
  
  // Atualizar os valores da tarefa no array Tarefas
  if (tarefaIndex !== -1) {
    Tarefas[tarefaIndex].nome = nome;
    Tarefas[tarefaIndex].categoria = categoria;
    Tarefas[tarefaIndex].dataInicio = dataInicio;
    Tarefas[tarefaIndex].dataFim = dataFim;
  }
  // Atualizar o armazenamento local e exibir as tarefas atualizadas
  localStorage.setItem("Tarefas", JSON.stringify(Tarefas));
  const btnFecharModals = document.querySelector("#close");
  btnFecharModals.click();
  verTarefas();
}

 
function edtTarefa(id, event) {
  const tarefaIndex = Tarefas.findIndex(tarefa => tarefa.id === id);
   const submits = document.querySelector("#submits");
   
submits.setAttribute("onclick", `editaTarefa(${id})`)
  const edtTarefaModaisLink = document.querySelector("#edtTarefaModaisLink");
  edtTarefaModaisLink.click();
   let nome_tarefa = document.querySelector("#nome_tarefa");
  let nome_categoria = document.querySelector("#nome_categoria");
  let dataInicials = document.querySelector("#dataInicials");
  let dataFinals = document.querySelector("#dataFinals");
  nome_tarefa.value = Tarefas[tarefaIndex].nome;
  nome_categoria.value = Tarefas[tarefaIndex].categoria;
  dataInicials.value = Tarefas[tarefaIndex].dataInicio;
  dataFinals.value = Tarefas[tarefaIndex].dataFim;
}

// function filtrarTarefasPorData(dataInicial, dataFinal) {
//   const tarefasFiltradas = Tarefas.filter(tarefa => {
//     // Converter as strings de data em objetos Date
//     const dataInicioTarefa = new Date(tarefa.dataInicio);
//     const dataFimTarefa = new Date(tarefa.dataFim);
    
//     // Verificar se a data da tarefa está dentro do intervalo especificado
//     return dataInicioTarefa >= dataInicial && dataFimTarefa <= dataFinal;
//   });
  
//   return tarefasFiltradas;
// }
function filtro() {
  event.preventDefault();

  const dataInicialFiltro = new Date(document.querySelector("#dataInicialFiltro").value);
  const dataFinalFiltro = new Date(document.querySelector("#dataFinalFiltro").value);

  // Verifica se as datas foram inseridas corretamente
  if (isNaN(dataInicialFiltro.getTime()) || isNaN(dataFinalFiltro.getTime())) {
    console.log("Por favor, insira datas válidas.");
    return;
  }

  // Função para filtrar as tarefas com base nas datas selecionadas
  const tarefasFiltradas = filtrarTarefasPorData(dataInicialFiltro, dataFinalFiltro);
  
  containerTarefas.innerHTML = "";
 tarefaBoxes.innerHTML = "";

 tarefasFiltradas.forEach((tarefa, index) => {
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
      ${tarefa.estado === false ? "Não concluída. " + `${tarefa.status}` : tarefa.concluida.split("-").reverse().join("/") + ". " + tarefa.status}
    </h6>
   
    <a class="card-link" onclick="mudarEstado(${index})">
      ${tarefa.estado === false ? "Concluir" : "Desfazer"}
    </a>
   
    
    <a class="card-link" onclick='edtTarefa(${tarefa.id}, event)'>
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

  console.log(tarefasFiltradas);
}


// Função para filtrar tarefas com base nas datas
function filtrarTarefasPorData(dataInicial, dataFinal) {
  return Tarefas.filter(tarefa => {
    const dataInicioTarefa = new Date(tarefa.dataInicio);
    const dataFimTarefa = new Date(tarefa.dataFim);
    return dataInicioTarefa >= dataInicial && dataFimTarefa <= dataFinal;
  });
}

/*const dataInicialFiltro = document.querySelector("#dataInicialFiltro").value;
const dataFinalFiltro = document.querySelector("#dataFinalFiltro").value;
// Exemplo de uso:
const tarefasFiltradas2 = filtrarTarefasPorData(dataInicialFiltro.value, dataFinalFiltro.value);*/

// function filtro() {
//   event.preventDefault();
//   // body...
// console.log(dataInicialFiltro.value);
// console.log(dataFinalFiltro);
// console.log(tarefasFiltradas2);
// }

const dataInicial = new Date('2024-03-26'); // Data inicial do filtro
const dataFinal = new Date('2024-03-30'); // Data final do filtro

const tarefasFiltradas = filtrarTarefasPorData(dataInicial, dataFinal);
console.log(tarefasFiltradas);

 
 const submits = document.querySelector("#submits");
 const submites = document.querySelector("#submites");
 submites.addEventListener("submit", (event) => {
   event.preventDefault();
   verTarefas();
 })


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
  
   /* console.log(calcularStatusDaTarefa(tarefa));
    console.log(status);
    if (calcularStatusDaTarefa(tarefa) < 0) {
    console.log(status);
};*/
  
  Tarefas[index].status = status;

  // Salva as alterações no armazenamento local
  localStorage.setItem("Tarefas", JSON.stringify(Tarefas));

  // Atualiza a visualização das tarefas na interface do usuário
  verTarefas();
}
 
 function calcularDiferencaEmDias(data1, data2) {
  const diffEmMilissegundos = new Date(data2) - new Date(data1);
  return Math.ceil(diffEmMilissegundos / (1000 * 60 * 60 * 24));
}

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


fim_tarefa.value = obterDataConclusao();

inicio_tarefa.value = obterDataConclusao();

const iniciotarefa = document.querySelector("#dataInicial");
  const fimtarefa = document.querySelector("#dataFinal");

fimtarefa.value = obterDataConclusao();

iniciotarefa.value = obterDataConclusao();

const addTarefaModalbtn = document.querySelectorAll("#addTarefaModals button");

addTarefaModalbtn.forEach((item, index) => {
  
  item.addEventListener("click", function () {
    const input_tarefas = document.querySelector("#input_tarefa");
    input_tarefas.value = "";
    input_categorias.value = "";
   fim_tarefa.value = obterDataConclusao();
inicio_tarefa.value = obterDataConclusao();
  })
});
 
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

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}


