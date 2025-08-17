const frases = require("../db.json");
const { gerarNomes } = require("./utils/nameGenerator");

const { frasesProntas } = require("./utils/nameGenerator"); 

function processarMensagem(input) {
  try {
    // Caso seja menção → responde com frase aleatória de qualquer categoria
    if (input.contexto === "mencao") {
      const todasCategorias = Object.values(frases).flat();
      const frase = pegarAleatorio(todasCategorias);
      return input.responder(frase);
    }
    if (/gerar nick|criar nome|gerar nome|criar nick/.test(input.mensagem)){
    return input.responder(`${frasesProntas()} **${gerarNomes()}**`)
    }
    // Caso seja no geral → busca correspondência simples
    if (/moggado|mogged|mogg?/i.test(input.mensagem)) {
      return input.responder(pegarAleatorio(frases.moggado));
    } else if (/sobra|nada|beta|betinha|cabousse|brutal|restou/i.test(input.mensagem)) {
      return input.responder(pegarAleatorio(frases.sobraNada));
    } else if (/over|its|cabousse|brutal/i.test(input.mensagem)) {
      return input.responder(pegarAleatorio(frases.itsOver));
    } else if (/churrascamento|churras|churrasco|sobra|oque| sobrou/i.test(input.mensagem)) {
      return input.responder(pegarAleatorio(frases.churrascamento));
    } else if (/sigma|based|chad|jawline/i.test(input.mensagem)){
      return input.responder(pegarAleatorio(frases.sigma));
    }

    // Reação aleatória (10% de chance)
    if (Math.random() < 0.1) {
      input.reagir("🔥");
    }
  } catch (err) {
    tratarErro(err);
  }
}

function pegarAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}


function tratarErro(err) {
  console.error("❌ Erro no controller:", err);
}

module.exports = { processarMensagem, tratarErro };
