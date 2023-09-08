/* um conjunto de leitores respondeu a um survey(pesquisa)que continha as seguintes perguntas: 
qual a idade de cada  leitor? Em qual  cidade  o leitor mora? E a opinião em  relação ao livro que  fora  
lançado meses atrás,  em que o leitor respondeuma das seguintes opções: 3-ótimo, 2 -bom e 1 –regular (1,25).
Escreva um programa que receba a idade, a cidade e a opinião de 16 leitores, calcule e exiba: 
a média das idades dos leitores que responderam ótimo;
a quantidade de leitores que responderam regular;
a porcentagem de leitores que responderam bom entre todos os leitores;
a porcentagem de leitores para cada cidade. */

const readlineSync = require('readline-sync');



var pessoas = []; // Declara a variável pessoas aqui
var idade;
var cidade;
var opiniao;
var somaIdadesRegular=0;
var somaIdadesBom = 0;
var somaIdadeOtimo= 0;
var contadorOtimo = 0; 
var contadorBom=0;
var contatadorRegular=0;
var contagemCidades = {};
for (var i = 0; i < 2; i++) {
  console.log("***********************************************************")
  idade = parseInt(readlineSync.question("Digite sua idade :"));
  cidade = readlineSync.question("Digite sua cidade :");
  opiniao = readlineSync.question("Me conte sua opnião sobre o livro:");
  console.log("Qual nota você dá para o livro...");
  console.log("3 => ÓTIMO");
  console.log("2 => BOM");
  console.log("1 => REGULAR");
  var opcao = parseInt(readlineSync.question("Qual a sua nota? "));
  console.log("***********************************************************")

  switch (opcao) {
    case 1:
    case 2:
    case 3:
      var leitor = {
        idade: idade,
        cidade: cidade,
        opiniao: opiniao,
        opcao: opcao
      };
      pessoas.push(leitor);

      if (opcao === 1) {
        somaIdadesRegular += idade;
        contatadorRegular ++;
        }
      if(opcao === 2){
        somaIdadesBom += idade;
        contadorBom ++;
        
      }else{
        somaIdadeOtimo += idade;
        contadorOtimo++;
      }
       // Atualiza a contagem de leitores por cidade
       if (cidade in contagemCidades) {
        contagemCidades[cidade]++;
      } else {
        contagemCidades[cidade] = 1;
      }
      break;
    default:
      console.log("Opção inválida....");
  }
}
console.log("***********************************************************")
console.log(pessoas);

console.log("***********************************************************")
console.log("Media de idades de todos os leitores: ")
var somaIdades = 0;
for (var j = 0; j < pessoas.length; j++) {
  somaIdades += pessoas[j].idade;
 }
 if (somaIdades>0){
  var mediaIdadesTotal = somaIdades / pessoas.length;
  console.log("A média das idades dos leitores é: " + mediaIdadesTotal.toFixed(0)+"anos");
 }else{
  console.log("Esse campo não foi preenchido...")
 }


console.log("***********************************************************")
if(contatadorRegular === 1){
  console.log(contatadorRegular + " leitor votou em REGULAR  ")
}else if(contatadorRegular > 0){
  console.log(contatadorRegular + " leitores votaram em REGULAR  ")
 
}
else{
  console.log("Nenhum leitor votou nessa opção...")
}

console.log("***********************************************************")
if(contadorOtimo> 0){
  mediaIdades = somaIdadeOtimo / contadorOtimo;
  console.log("A média de idade que votaram em OTIMO é : "+mediaIdades.toFixed(0)+"anos")
}else{
  console.log("Esse campo não foi preenchido")
}

console.log("***********************************************************")

console.log("Porcentagem de leitores que votaram em BOM: ")
if(contadorBom>0){
  var porcentagem = (contadorBom/pessoas.length )*100;
  console.log(porcentagem.toFixed(2)+"%")
}else{
  console.log("Esse campo não foi preenchido....")
}


console.log("***********************************************************")
console.log("Porcentagem de leitores por cidade:");
for (var cidade in contagemCidades) {
    var porcentagemCidade = (contagemCidades[cidade] / pessoas.length) * 100;
    console.log(cidade + ": " + porcentagemCidade.toFixed(2) + "%");
  }
 



