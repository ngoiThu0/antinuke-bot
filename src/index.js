// init index
const { TOKEN } = require("./data/config.json")
const discord = require("discord.js");
const { Client, IntentsBitField } = require('discord.js')
const handler = require("./handler/index");

const bot = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildModeration,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.MessageContent
    ],
});


(async () => {
    try {
        handler(bot);
    } catch (error) {
        console.log(error);
    }
})();


bot.login(TOKEN);
