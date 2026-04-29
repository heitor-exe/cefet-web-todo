// Vetor de tarefas
const tarefas = [
  {
    nome: "Estudar JavaScript",
    categoria: "estudos",
    realizada: false,
  },
  {
    nome: "Estudar React",
    categoria: "estudos",
    realizada: false,
  },
  {
    nome: "Estudar Node.js",
    categoria: "estudos",
    realizada: false,
  },
  {
    nome: "Comprar leite",
    categoria: "compras",
    realizada: false,
  },
  {
    nome: "Comprar pão",
    categoria: "compras",
    realizada: false,
  },
  {
    nome: "Comprar arroz",
    categoria: "compras",
    realizada: false,
  },
  {
    nome: "Ler livro",
    categoria: "lazer",
    realizada: false,
  },
  {
    nome: "Escutar Twenty One Pilots",
    categoria: "lazer",
    realizada: false,
  },
];

function insereTarefaNaPagina(tarefa) {
  // Cria o <li>
  const item = document.createElement("li");

  // Define o texto do item
  item.textContent = tarefa.nome;

  // Define as classes
  item.classList.add("item-tarefa");

  // Adiciona a classe "marcado" se a tarefa estiver concluída
  if (tarefa.realizada) {
    item.classList.add("marcado");
  }

  // Adiciona a classe da categoria
  item.classList.add(`categoria-${tarefa.categoria}`);

  // Adiciona o item à lista
  const lista = document.getElementById("lista-tarefas");
  lista.appendChild(item);
}

// FLUXO PRINCIPAL
// Limpa a lista de tarefas
const lista = document.getElementById("lista-tarefas");
lista.innerHTML = "";

// Insere todas as tarefas na página
tarefas.forEach(insereTarefaNaPagina);

// Obtém os elementos do DOM para a adição de novas tarefas
const inputTarefa = document.getElementById("nova-tarefa-nome");
const botaoIncluir = document.getElementById("incluir-nova-tarefa");
const novaTarefaCategoria = document.getElementById("nova-tarefa-categoria");

// Arrow function para incluir uma nova tarefa
const incluirNovaTarefa = () => {
  // Verifica se o input não está vazio
  const valorInput = inputTarefa.value.trim();

  // Se o valor do input estiver vazio, não faz nada
  if (valorInput === "") return;

  const novaTarefa = {
    nome: valorInput,
    categoria: novaTarefaCategoria.value,
    realizada: false,
  };

  // Adiciona a nova tarefa ao array e insere na página
  tarefas.push(novaTarefa);
  insereTarefaNaPagina(novaTarefa);

  // Limpa o input após adicionar a tarefa
  inputTarefa.value = "";

  // Coloca o foco no input após adicionar a tarefa
  inputTarefa.focus();
};

// Adiciona o evento de clique ao botão de incluir nova tarefa
botaoIncluir.addEventListener("click", incluirNovaTarefa);

// Filtro de categoria
// Obtém os elementos do DOM para o filtro de categoria
const filtroCategoria = document.getElementById("filtro-de-categoria");

// Adiciona o evento de mudança ao filtro de categoria
filtroCategoria.addEventListener("change", () => {
  // Obtém a categoria selecionada pelo usuário
  const categoriaSelecionada = filtroCategoria.value;

  // Obtém todos os itens de tarefa da lista
  const itensTarefa = document.querySelectorAll(".item-tarefa");

  // Esmaecer as tarefas que não correspondem à categoria selecionada
  // adicionar a classe `item-tarefa.retido-no-filtro` às tarefas que não correspondem à categoria selecionada
  itensTarefa.forEach((tarefaElemento) => {
    // Se nenhuma categoria foi selecionada, exibe todas as tarefas
    if (categoriaSelecionada === "") {
      tarefaElemento.classList.remove("retido-no-filtro");
      return;
    }

    // Verifica se o item possui a classe da categoria selecionada
    if (
      tarefaElemento.classList.contains(`categoria-${categoriaSelecionada}`)
    ) {
      // Remove a classe `retido-no-filtro` se a categoria corresponder à selecionada
      tarefaElemento.classList.remove("retido-no-filtro");
    } else {
      // Adiciona a classe `retido-no-filtro` se a categoria não corresponder à selecionada
      tarefaElemento.classList.add("retido-no-filtro");
    }
  });
});
