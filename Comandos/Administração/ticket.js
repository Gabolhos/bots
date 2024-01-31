const Discord = require("discord.js")

module.exports = {
  name: "ticket", // Coloque o nome do comando
  description: "Abra o painel de tickets.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
        interaction.reply({ content: `Você não possui permissão para utilzar este comando!`, ephemeral: true })
    } else {
        let embed = new Discord.EmbedBuilder()
        .setColor("Red")
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
            .setDescription(`📌  **Central de Atendimento**
            
            Lembre-se de que não há dúvida pequena demais ou grande demais para ser esclarecida. Buscar respostas é um processo natural e enriquecedor que nos ajuda a crescer e aprimorar nossos conhecimentos e habilidades. Portanto, não hesite em buscar esclarecimentos sempre que necessário.
            
            
            > 🕗 Horário de atendimento: 08:00 às 22:00 - Segunda a Domingo, horário de Brasília (exceto feriados).
            > 
            > Atendimentos fora de horário **NÃO SERÃO RESPONDIDOS!**.`);

        let painel = new Discord.ActionRowBuilder().addComponents(
            new Discord.SelectMenuBuilder()
            .setCustomId("painel_ticket")
            .setPlaceholder("Clique aqui!")
            .addOptions(
                {
                    label: "💣 Denúncia",
                    description: "Abra um para fazer uma Denúncia",
                    value: "opc1"
                },
                {
                    label: "❓ Dúvidas",
                    description: "Abra um ticket somente para tirar dúvidas.",
                    value: "opc2"
                },
                {
                    label: "💸 Financeiro",
                    description: "Abra um ticket para saber sobre Vips e mais...",
                    value: "opc3"
                }
            )
        );

        interaction.reply({ content: `✅ Mensagem enviada!`, ephemeral: true })
        interaction.channel.send({ embeds: [embed], components: [painel] })
    }


  }
}