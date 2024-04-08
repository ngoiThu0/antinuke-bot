// timeout a member or a bot for a reason

const { PermissionsBitField } = require("discord.js")

module.exports = {
    name: 'mute',
    alias: ['timeout'],
    description: "Mute command",
    
    permissionsRequired: [PermissionsBitField.Flags.SendMessages],
    botPermissions: [PermissionsBitField.Flags.SendMessages],


    execute: async (bot, object, options) => {
        let interaction = object.interaction || object.message;
        successEmbed.setDescription("Đang bảo trì...");
        interaction.reply({embeds: [successEmbed]});
    }
}