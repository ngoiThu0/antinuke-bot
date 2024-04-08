const { Client, ActivityType } = require("discord.js");
const registerCommands = require("../../utils/registerCommands");
const { prefix} = require("../../data/config.json");
const connectDatabase = require("../../utils/connectDatabase");

module.exports = async (bot) => {
    console.log(`[*] ${bot.user.tag} is onl now.`);
    Client.prototype.prefix = prefix;   
    registerCommands();
    await connectDatabase(bot);
    bot.user.setActivity({
        name: "with oh yeye.",
        type: ActivityType.Streaming,
        url: process.env.MY_TWITCH
    })
}