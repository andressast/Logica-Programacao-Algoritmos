function mostrarPromocao() {
  // criando referência
  var inVeiculo = document.getElementById("inVeiculo");
  var inPreco = document.getElementById("inPreco");
  var outVeiculo = document.getElementById("outVeiculo");
  var outEntrada = document.getElementById("outEntrada");
  var outParcela = document.getElementById("outParcela");

  //obter conteúdo dos campos de entrada
  var veiculo = inVeiculo.value;
  var preco = inPreco.value;

  //calculando a entrada
  var entrada = preco * 0.50;
  var saldo = (preco - entrada)/12;

  //mostrar a resposta
  outVeiculo.textContent = "Promoção: " + veiculo;
  outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
  outParcela.textContent = "+ 12x de R$: " + saldo.toFixed(2);
}

//cria uma referência ao elemento btVerPromocao (botão)
var btVerPromocao = document.getElementById("btVerPromocao")

//envento associado ao botão para carregar a função mostrarPromocao()
btVerPromocao.addEventListener("click", mostrarPromocao);

