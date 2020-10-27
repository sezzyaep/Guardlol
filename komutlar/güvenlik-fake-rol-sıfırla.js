const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let c = await db.fetch(`güvenlikfake_${message.guild.id}`);
    if (!c)
      return message.channel.send("Güvenlik fake rolü zaten sıfırlanmamış!");
    message.channel.send("Güvenlik fake rolü başarıyla sıfırlandı!");
    db.delete(`güvenlikfake_${message.guild.id}`);
  } else {
    let c = await db.fetch(`güvenlikfake_${message.guild.id}`);
    if (!c)
      return message.channel.send(
        "The security fake role has not been reset already!"
      );
    message.channel.send("Security fake role has been successfully reset!");
    db.delete(`güvenlikfake_${message.guild.id}`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-fake-role-reset"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-sahte-rol-sıfırla",
  description: "güvenlik-sahte-rol-sıfırla",
  usage: "güvenlik-sahte-rol-sıfırla"
};
