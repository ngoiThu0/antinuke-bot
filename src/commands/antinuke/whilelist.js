// whilelist command
const { PermissionsBitField } = require("discord.js")

module.exports = {
    name: 'whilelist',
    alias: ['wl', 'wlist'],
    description: "Whilelist command",
    
    permissionsRequired: [PermissionsBitField.Flags.SendMessages],
    botPermissions: [PermissionsBitField.Flags.SendMessages],


    execute: async (bot, object, options) => {
        let interaction = object.interaction || object.message;
        successEmbed.setDescription("Đang bảo trì...");
        interaction.reply({embeds: [successEmbed]});
    }
}