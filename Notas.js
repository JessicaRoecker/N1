
const readlineSync = require('readline-sync');

var nomeAluno;
var notasExames = {
    ExameI: 0,
    ExameII: 0,
    ExameIII: 0,
    ExameIV: 0,
    ExameV: 0
};

nomeAluno = readlineSync.question("Qual o nome do aluno? ")

console.log("*******************")
console.log("Menu")
console.log("Digite 1 => Exame I");
console.log("Digite 2 => Exame II");
console.log("Digite 3 => Exame III");
console.log("Digite 4 => Exame IV");
console.log("Digite 5 => Exame V");
console.log("Digite 0 => Resultado Final");
console.log("*******************")

var opcao;

while (opcao !== 0) {
    opcao = parseInt(readlineSync.question("Qual a opção que você deseja realizar: "))

    switch (opcao) {
        case 0:
            if (opcao === 0) {
                ResultadoExames();
            }
            break;
        case 1:
            RegistrarNota("ExameI");
            break;
        case 2:
            RegistrarNota("ExameII");
            break;
        case 3:
            RegistrarNota("ExameIII");
            break;
        case 4:
            RegistrarNota("ExameIV");
            break;
        case 5:
            RegistrarNota("ExameV");
            break;
        default:
            console.log("Opção inválida....");
    }
}

function RegistrarNota(exame) {
    nota = parseInt(readlineSync.question("Digite a nota: "));
    notasExames[exame] = nota;
    console.log("Nota do " + exame + " registrada com sucesso");
    console.log("*******************");
}

function ResultadoExames() {
    var notasAprovacao = {
        ExameI: 7,
        ExameII: 7,
        ExameIII: 7,
        ExameIV: 7,
        ExameV: 7
    };

    console.log("Aluno(a) " + nomeAluno);
    console.log("Teve as seguintes nota: ");

    for (var exame in notasExames) {
        console.log("Nota " + exame + ": " + notasExames[exame]);
    }

    var aprovado = true;

    for (var exame in notasExames) {
        if (notasExames[exame] < notasAprovacao[exame]) {
            console.log("Reprovado no " + exame);
            aprovado = false;
        }
    }

    if (aprovado) {
        console.log("*******************");
        console.log("Teve aprovação com êxito");
    }
}
