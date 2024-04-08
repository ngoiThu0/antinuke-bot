// handle chat input command

const { successEmbed, erroEmbed } = require("../../../../js bot/test/src/lib/EmbedMessages");
const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (bot, interaction) => {
    if(!interaction.isChatInputCommand()) return;
    try {
        let localCommands = await getLocalCommands();
        let check = true;
        const commandOject = localCommands.find(cmd =>{
            return cmd.name === interaction.commandName|| cmd.alias.includes(interaction.commandName);
        })
        
        if(!commandOject) return;

        if(commandOject.onlyDev){
            if(!devTeam.includes(interaction.user.id)){
                interaction.reply("Xin lỗi, lệnh này chỉ dành cho các nhà phát triển của chúng tôi.");
                return;
            }
        }

        if(commandOject.permissionsRequired.length){
            commandOject.permissionsRequired.forEach(perm => {
                if(!interaction.member.permissions.has(perm)){
                    erroEmbed.setDescription("Bạn không đủ quyền để thực hiện lệnh này.");
                    interaction.reply({embeds: [erroEmbed]});
                    check = false;
                    return;
                }
            });
            if(!check) return;
        }

        if(commandOject.botPermissions.length){
            const botGuild = interaction.guild.members.cache.get(bot.user.id);
            commandOject.botPermissions.forEach(perm => {
                if(!botGuild.permissions.has(perm)){
                    erroEmbed.setDescription("Tôi không có đủ quyền thực hiện.");
                    interaction.reply({embeds: [erroEmbed]});
                    check = false;
                    return;
                }
            })
            if(!check) return;
        }
        
        if(commandOject.type === "game"){
            const userAcceptBotCheck = await checkExistUser(bot, interaction);
            console.log(userAcceptBotCheck);
            if(!userAcceptBotCheck) return;
        }

        const options = interaction.options.data.map(option => option.value);
        console.log(options);
        await commandOject.execute(bot, {interaction: interaction}, options);
    } catch (error) {
        interaction.reply("Đã có lỗi trong quá trình thực hiện lệnh.");
        console.log(error)
    }
}