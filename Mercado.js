 const readlineSync = require('readline-sync');
 var opcao;
 var escolha = {
    1 : 24.90,
    2: 25.90,
    3: 36.90
};
var valorTotal= 0;
var valor = 0;
var tipoCarne;
var opcaoPagamento
var quantidade

 

 console.log("promoções do dia")
 console.log("Até 5 Kg\nFile Duplo    R$ 24,90 por Kg\nAlcatra       R$ 25,90 por Kg\nPicanha       R$ 36,90 por Kg ")        
 console.log("****************************************************")
 console.log("Acima de 5kg\nFile Duplo    R$ 25,80 por Kg\nAlcatra       R$ 26,80 por Kg\nPicanha       R$ 37,80 por Kg")
 console.log("****************************************************")

 function EscolhaMenu(){
    console.log("Essas são as opções: ")
    console.log("Digite 1 => File Duplo")
    console.log("Digite 2 => Alcatra")
    console.log("Digite 3 => Picanha")
opcao = parseInt(readlineSync.question("Qual carne você deseja: "))

switch(opcao){
    case 1:
        PedidoCliente("1")        
        break;
    case 2:
        PedidoCliente("2")
        break;
    case 3:
        PedidoCliente("3")
        break;
    default:
        console.log("Opção invalida...\nTente novamente")
        console.log("\n\n")
        return EscolhaMenu()
       
    
}

}
EscolhaMenu();

function PedidoCliente(pedido){
    quantidade =readlineSync.question("Quantos Kg voce deseja: ") 
    
    if(quantidade <=5 ){
        valor = escolha[pedido]* quantidade
        console.log("O valor total da compra foi de R$"+valor.toFixed(2))
        valorTotal += valor;
    
    }else{
        valor = escolha[pedido]* quantidade
        console.log(valor.toFixed(2))
        valorTotal += valor;
    }
    if(pedido === "1"){
        tipoCarne= "File Duplo"
    }else if(pedido === "2"){
        tipoCarne = "Alcatra"
    }else{
        tipoCarne= "Picanha"
    }
    TipoPagamento();
}
            
function TipoPagamento(){
    console.log("Qual a opção de Pagamento: ")
    console.log("Digite 1 => cartao Tabajara")
    console.log("Digite 2 => outro carato")
    opcaoPagamento  = parseInt(readlineSync.question("Opção: ")) 
    CupomFiscal();
    
}

function CupomFiscal(){
    if(opcaoPagamento === 1){
    var desconto = valorTotal *0.05
    valorTotal -= desconto;
    console.log("**************")
    console.log("Cupom fiscal")
    console.log("Tipo da carne: "+tipoCarne)
    console.log("Quantidade:"+quantidade+"Kg")
    console.log("Valor Total sem desconto: R$"+valor.toFixed(2))
    console.log("Tipo de pagamento: "+opcaoPagamento)
    console.log("Desconto de: R$"+desconto.toFixed(2))
    console.log("Total da compra com 5% de desconto: " + valorTotal.toFixed(2));
} 
 else{
    console.log("**************")
    console.log("Cupom fiscal")
    console.log("Tipo da carne: "+tipoCarne)
    console.log("Quantidade:"+quantidade+"Kg")
    console.log("Valor Total R$"+valor.toFixed(2))
}
}


   

    
           


    




    

