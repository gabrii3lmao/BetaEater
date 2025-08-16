const frases = require("../db.json");

function processarMensagem(input) {
  try {
    // Caso seja menção → responde com frase aleatória de qualquer categoria
    if (input.contexto === "mencao") {
      const todasCategorias = Object.values(frases).flat();
      const frase = pegarAleatorio(todasCategorias);
      return input.responder(frase);
    }

    // Caso seja no geral → busca correspondência simples
    if (/moggado|mogged|mogg?/i.test(input.mensagem)) {
      return input.responder(pegarAleatorio(frases.moggado));
    } else if (/sobra|nada|beta|betinha|restou/i.test(input.mensagem)) {
      return input.responder(pegarAleatorio(frases.sobraNada));
    } else if (/over|its/i.test(input.mensagem)) {
      return input.responder(pegarAleatorio(frases.itsOver));
    } else if (/churrascamento|churras|churrasco/i.test(input.mensagem)) {
      return input.responder(pegarAleatorio(frases.churrascamento));
    }

    // Reação aleatória (10% de chance)
    if (Math.random() < 0.1) {
      input.reagir("🔥", "🤓");
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
