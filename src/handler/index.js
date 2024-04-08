// handle controller

const path = require("path");
const loadAllFiles = require("../utils/loadAllFiles");

module.exports = (bot) => {
    const eventPaths = loadAllFiles(path.join(__dirname, '..', 'events'), true);
    console.log(eventPaths);
    
    eventPaths.forEach(eventPath => {
        const eventName = eventPath.replace(/\\/g, '/').split('/').pop('');
        console.log(eventName);

        bot.on(eventName, async (arg) =>{
            const eventFiles = loadAllFiles(eventPath);
            eventFiles.forEach(async eventFile => {
                const eventFunction = require(eventFile);
                await eventFunction(bot, arg);
            })
        })
    }) 
}