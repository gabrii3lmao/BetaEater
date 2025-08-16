const { Events } = require('discord.js');
const controller = require('./controller.js');

function registrarEventos(client) {
    client.once(Events.ClientReady, readyClient => {
        console.log(`✅ Bot online como ${readyClient.user.tag}`);
    });

    client.on(Events.MessageCreate, async msg => {
        if (msg.author.bot) return; // Ignora mensagens de bots

        let contexto;
        if (msg.mentions.has(client.user)) {
            contexto = "mencao";
        } else {
            contexto = "geral";
        }

        // Cria objeto para o controller
        const inputUsuario = {
            mensagem: msg.content.toLowerCase(),
            contexto: contexto,
            responder: (texto) => msg.reply(texto), // função para responder
            reagir: (emoji) => msg.react(emoji) // função para reagir
        };

        controller.processarMensagem(inputUsuario);
    });
}

module.exports = { registrarEventos };
