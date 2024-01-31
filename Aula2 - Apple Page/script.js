// Obtendo referências para elementos do DOM
const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const tituloProduto = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const opcaoImagem0 = document.getElementById('0-imagem-miniatura');
const opcaoImagem1 = document.getElementById('1-imagem-miniatura');
const opcaoImagem2 = document.getElementById('2-imagem-miniatura');

// Definindo objetos para representar diferentes opções de cores
const verdeCipreste = {
  nome: 'Verde-cipreste',
  nomePastaImagens: 'imagens-verde-cipreste',
};
const azulInverno = {
  nome: 'Azul-inverno',
  nomePastaImagens: 'imagens-azul-inverno',
};
const meiaNoite = {
  nome: 'Meia-noite',
  nomePastaImagens: 'imagens-meia-noite',
  emEstoque: false, // Indicando que a cor "Meia-noite" não está em estoque
};
const estelar = {
  nome: 'Estelar',
  nomePastaImagens: 'imagens-estelar',
};
const rosaClaro = {
  nome: 'Rosa-claro',
  nomePastaImagens: 'imagens-rosa-claro',
};

// Armazenando todas as opções de cores em um array
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

// Armazenando opções de tamanhos em um array
const opcoesTamanho = ['41 mm', '45 mm'];

// Inicializando variáveis para rastrear a cor, tamanho e imagem selecionados
let corSelecionada = 1;
let tamanhoSelecionado = 1;
let imagemSelecionada = 1;

// Função para atualizar a cor selecionada com base na escolha do usuário
function atualizarCorSelecionada() {
  const numeroCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);
  corSelecionada = numeroCorSelecionada;

  // Atualizando elementos na interface com base na cor selecionada
  nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
  opcaoImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-0.jpeg`;
  opcaoImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-1.jpeg`;
  opcaoImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-2.jpeg`;
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
}

// Função para atualizar o tamanho selecionado com base na escolha do usuário
function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);
  tamanhoSelecionado = opcaoTamanhoSelecionado;

  // Atualizando elementos na interface com base no tamanho selecionado
  if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
    imagemVisualizacao.classList.add('caixa-pequena');
  } else {
    imagemVisualizacao.classList.remove('caixa-pequena');
  }
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
}

// Função para atualizar a imagem selecionada com base na escolha do usuário
function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);
  imagemSelecionada = opcaoImagemSelecionada;

  // Atualizando a imagem de visualização com base na imagem selecionada
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
}