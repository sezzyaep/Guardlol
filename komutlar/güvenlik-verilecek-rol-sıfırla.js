const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let c = await db.fetch(`güvenlikverilecek_${message.guild.id}`);
    if (!c) return message.channel.send("Güvenlik verilecek rolü zaten sıfırlanmamış!");
    message.channel.send("Güvenlik verilecek rolü başarıyla sıfırlandı!");
    db.delete(`güvenlikverilecek_${message.guild.id}`);
  } else {
    let c = await db.fetch(`güvenlikverilecek_${message.guild.id}`);
    if (!c) return message.channel.send("The security given role has not been reset already!");
    message.channel.send("Security given role has been successfully reset!");
    db.delete(`güvenlikverilecek_${message.guild.id}`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-add-role-reset"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-rol-sıfırla",
  description: "güvenlik-rol-sıfırla",
  usage: "güvenlik-rol-sıfırla"
};
