const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let kanal = args[0]
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Lütfen bir sınır belirtiniz!`);
      message.channel.send(embed);
      return;
    }
    db.set(`rollim_${message.guild.id}`, kanal);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Rol limit; ${kanal} olarak ayarlandı!\nNot: Eğer ayarlardan herhangi bir rol ayarlanmadıysa limit işlemez!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = args[0]
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Please specify a limit!`);
      message.channel.send(embed);
      return;
    }
    db.set(`rollim_${message.guild.id}`, kanal);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Role limit; Set to ${kanal}!\nNote: If no role has been set in the settings, no limit is set!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-limit"],
  permLevel: 3
};

exports.help = {
  name: "role-limit",
  description: "role-limit",
  usage: "role-limit"
};
