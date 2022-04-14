function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  //Adicionar linha de Bitcoin
  var valorBitcoin = 0.000024;
  var converterBitcoin = valorEmDolarNumerico * valorBitcoin;
  console.log(converterBitcoin);
  var elementoBitcoin = document.getElementById("valorConvertidoBitcoin");
  var convertidoBitcoin = "O resultado em Bitcoin é R$ " + converterBitcoin;
  elementoBitcoin.innerHTML = convertidoBitcoin;
}
