// Array de objetos com os vinhos da Vinheria Agnello
const vinhos = [
  {
    nome: "Agnello Reserva",
    tipo: "tinto",
    safra: 2020,
    estoque: 8
  },
  {
    nome: "Agnello Branco Suave",
    tipo: "branco",
    safra: 2022,
    estoque: 4
  },
  {
    nome: "Agnello Rose",
    tipo: "rose",
    safra: 2021,
    estoque: 3
  }
];

// Adiciona um novo vinho no array
function adicionarVinho(nome, tipo, safra, estoque) {
  const novoVinho = {
    nome: nome,
    tipo: tipo,
    safra: safra,
    estoque: estoque
  };

  vinhos.push(novoVinho);
}

// Lista todos os vinhos usando forEach
function listarVinhos() {
  console.log("Lista completa de vinhos:");

  vinhos.forEach(function (vinho) {
    console.log(
      "Nome: " + vinho.nome +
      " | Tipo: " + vinho.tipo +
      " | Safra: " + vinho.safra +
      " | Estoque: " + vinho.estoque
    );
  });
}

// Mostra os vinhos com estoque abaixo de 5 usando filter
function mostrarVinhosEstoqueBaixo() {
  const vinhosEstoqueBaixo = vinhos.filter(function (vinho) {
    return vinho.estoque < 5;
  });

  console.log("Vinhos com estoque abaixo de 5:");

  vinhosEstoqueBaixo.forEach(function (vinho) {
    console.log(
      "Nome: " + vinho.nome +
      " | Tipo: " + vinho.tipo +
      " | Safra: " + vinho.safra +
      " | Estoque: " + vinho.estoque
    );
  });
}

// Calcula o estoque total usando reduce
function calcularEstoqueTotal() {
  const estoqueTotal = vinhos.reduce(function (total, vinho) {
    return total + vinho.estoque;
  }, 0);

  console.log("Estoque total da vinicola: " + estoqueTotal);
}

// Exibe os nomes dos vinhos em caixa alta usando map
function exibirNomesCaixaAlta() {
  const nomesEmCaixaAlta = vinhos.map(function (vinho) {
    return vinho.nome.toUpperCase();
  });

  console.log("Nomes dos vinhos em caixa alta:");

  nomesEmCaixaAlta.forEach(function (nome) {
    console.log(nome);
  });
}

// Execucao das funcoes solicitadas
adicionarVinho("Agnello Moscatel", "branco", 2023, 10);

listarVinhos();
mostrarVinhosEstoqueBaixo();
calcularEstoqueTotal();
exibirNomesCaixaAlta();