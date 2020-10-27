const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let kanal = await db.fetch(`rolk_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Rol koruma zaten ayarlanmamış!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Rol koruma sistemi sıfırlandı!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = await db.fetch(`rolk_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Role protection is not already set!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Role protection system reset!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role-protection-reset"],
  permLevel: 3
};

exports.help = {
  name: "rol-koruma-sıfırla",
  description: "rol-koruma-sıfırla",
  usage: "rol-koruma-sıfırla"
};
