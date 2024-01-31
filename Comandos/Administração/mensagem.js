const Discord = require("discord.js");

module.exports = {
    name: "mensagem",
    description: "envia uma mensagem no chat",
    options: [
        {
            name: "texto",
            description: "insira o texto",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "canal",
            description: "insira o canal que sera enviada a msg",
            type: Discord.ApplicationCommandOptionType.Channel,
            required: false,
        },

    ],

    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
            return interaction.reply({ content: "Você não tem permissão para usar este comando", ephemeral: true })
        } else {
            let message = interaction.options.getString("texto");
            let channel = interaction.options.getChannel("canal");

            if (!channel) channel = interaction.channel;
            interaction.reply({ content: "A mensagem foi enviada com sucesso", ephemeral: true })
            channel.send(message);
        }
    }
}