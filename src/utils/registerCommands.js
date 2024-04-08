const {REST, Routes, ApplicationCommandType} = require("discord.js")
const getLocalCommands = require('./getLocalCommands');
const { TOKEN, CLIENT_ID } = require('../data/config.json');

const rest = new REST({version : '10'}).setToken(TOKEN);


module.exports = async ()=> {
    try {
        const commands = await getLocalCommands();

        const commandsData = commands.map(command => ({
            name: command.name,
            description: command.description,
            options: command.options ? command.options.map(option => ({
                name: option.name,
                description: option.description,
                type: option.type,
                required: option.required || false,
                choices: option.choices || []
            })) : []
        }));

        console.log("Registing slash commands...");
        // console.log(commandsData);
        await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            {body : commandsData}
        )
        console.log("Success register commands.")
    } catch (error) {
        console.log(error);
    }
};
