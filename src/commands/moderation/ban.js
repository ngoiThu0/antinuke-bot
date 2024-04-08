// ban
const { PermissionsBitField} = require('discord.js')

module.exports = {
    name: 'ban',
    alias: [],
    
    permissionsRequired: [PermissionsBitField.Flags.BanMembers],
    botPermissions: [PermissionsBitField.Flags.BanMembers],


    execute: (bot, interaction, options) => {

        console.log("This is ban feature!!!");
    }
}