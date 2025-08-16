const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { registrarEventos } = require('./src/view.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

registrarEventos(client);

client.login(token);
