const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let kanal = await db.fetch(`rolrol_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Rol koruma rol zaten ayarlanmamış!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`rolrol_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Rol koruma rol sistemi sıfırlandı!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = await db.fetch(`rolrol_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Role protection role is not already set!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`rolrol_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Role protection role system reset!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role-protection-role-reset"],
  permLevel: 3
};

exports.help = {
  name: "rol-koruma-rol-sıfırla",
  description: "rol-koruma-rol-sıfırla",
  usage: "rol-koruma-rol-sıfırla"
};
