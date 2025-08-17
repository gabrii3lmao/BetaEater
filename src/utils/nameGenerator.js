const frases = require  ("../../db.json")

function frasesProntas (){
    const listaFrases = ["Saindo um nome fresquinho: ", "na mão chefia: ", "é pra já: ", "agora pae: ", "Na hora: ", "opa, tá na mão: ", "agora painho: "];

    const frase = listaFrases[Math.floor(Math.random() * listaFrases.length)];
    return frase;
}
function gerarNomes (){
    const firstName = frases.geradorDeNome.primeiroNome;
    const secondName = frases.geradorDeNome.segundoNome;
    const thirdName = frases.geradorDeNome.terceiroNome;

    const first = firstName[Math.floor(Math.random() * firstName.length)];
    const second = secondName[Math.floor(Math.random() * secondName.length)];
    const third = thirdName[Math.floor(Math.random() * thirdName.length)];

    return first + second + third;
}

module.exports = {gerarNomes, frasesProntas}; 
