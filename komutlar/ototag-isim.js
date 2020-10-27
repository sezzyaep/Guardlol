const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  let dil = (await db.fetch(`dil_${message.guild.id}`)) || "EN_us";
  if (dil == "TR_tr") {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      const embed = new Discord.RichEmbed()
        .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
        .setColor("BLACK");

      message.channel.send(embed);
      return;
    }

    let msj = args.slice(0).join(" ");
    if (!msj) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Eksik bir şey var! Bir isim belirtiniz!\n--------------------------------------------------------`
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
      .setDescription(`Ototag ismi; ${msj} olarak ayarlandı!`);
    message.channel.send(embed);

    db.set(`ototagmsj_${message.guild.id}`, msj);
  } else {
    let msj = args.slice(0).join(" ");
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Unfortunately, you are not authorized to use this command.`
        )
        .setColor("BLACK");

      message.channel.send(embed);
      return;
    }
    if (!msj) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `There is something missing! You did not specify auto tag name!\n--------------------------------------------------------`
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
      .setDescription(`Auto tag name; Set to ${msj}!`);
    message.channel.send(embed);

    db.set(`ototagmsj_${message.guild.id}`, msj);
  }
};

module.exports.conf = {
  aliases: ["autotag-name"],
  permLevel: 3,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "ototag-isim",
  description: "ototag-isim",
  usage: "ototag"
};
