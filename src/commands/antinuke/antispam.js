// anti spam
const { PermissionsBitField } = require("discord.js");

module.exports = {
    name: 'antispam',
    alias: ['ap'],
    description: "Antispam command",
    
    permissionsRequired: [PermissionsBitField.Flags.SendMessages],
    botPermissions: [PermissionsBitField.Flags.SendMessages],


    execute: async (bot, object, options) => {
        let interaction = object.interaction || object.message;
        successEmbed.setDescription("Đang bảo trì...");
        interaction.reply({embeds: [successEmbed]});
    }
}