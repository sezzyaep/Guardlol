const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  let sa = (await db.fetch(`dil_${message.guild.id}`)) || "EN_us";
  if (sa == "TR_tr") {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      const embed = new Discord.RichEmbed()
        .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
        .setColor("BLACK");

      message.channel.send(embed);
      return;
    }
    let tag = await db.fetch(`ototagmsj_${message.guild.id}`);
    if (!tag) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Eksik bir şey var! Ototag ismi zaten ayarlanmamış!\n--------------------------------------------------------`
        )
        .addField(
          "Ek `OTOTAG` komutları!",
          `${prefix}ototag <#Kanal> <Tag>\n${prefix}ototag-sıfırla\n${prefix}ototag-isim <İsim Düzeni>\n${prefix}ototag-isim-sıfırla`
        )
        .addField(
          `ototag-isim komutu değişkenleri;`,
          `-uye- = Üye ismini yazar.\n-tag- = Tagı yazar.\n-sunucu- = Sunucu adını yazar.\n-uyetag- = Üyenin tam adını yazar.`
        )
        .setColor("BLACK");
      message.channel.send(embed);
      return;
    }

    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Ototag ismi başarıyla sıfırlandı!`);
    message.channel.send(embed);

    db.delete(`ototagmsj_${message.guild.id}`);
  } else {
    let tag = await db.fetch(`ototag_${message.guild.id}`);
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Unfortunately, you are not authorized to use this command.`
        )
        .setColor("BLACK");

      message.channel.send(embed);
      return;
    }
    if (!tag) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `There is something missing! Auto tag name is not already set!\n--------------------------------------------------------`
        )
        .addField(
          "Additional `AUTOTAG` commands!",
          `${prefix}autotag <#Channel> <Tag>\n${prefix}autotag-reset\n${prefix}autotag-name <Name Order>\n${prefix}autotag-name-reset`
        )
        .addField(
          `autotag-name command variables;`,
          `-member- = Write the member name.\n-tag- = Writes tag.\n-server- = Write server name.\n-membertag- = Write the full name of the member.`
        )
        .setColor("BLACK");
      message.channel.send(embed);
      return;
    }
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`Auto tag name has been successfully reset!`);
    message.channel.send(embed);

    db.delete(`ototagmsj_${message.guild.id}`);
  }
};

module.exports.conf = {
  aliases: ["autotag-name-reset"],
  permLevel: 3,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "ototag-isim-sıfırla",
  description: "SS",
  usage: "ototag-isim-sıfırla"
};
