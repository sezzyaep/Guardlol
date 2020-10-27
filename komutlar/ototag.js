const Discord = require("discord.js"),
  db = require("quick.db");
exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      const embed = new Discord.RichEmbed()
        .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
        .setColor("BLACK");

      message.channel.send(embed);
      return;
    }

    let tag = args[1];
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Eksik bir şey var! Bir log kanalı belirtmelisin!\nÖrnek; ${prefix}ototag <#Kanal> <Tag>\n--------------------------------------------------------`
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
    if (!tag) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Eksik bir şey var! Bir tag belirtmelisin!\nÖrnek; ${prefix}ototag <#Kanal> <Tag>\n--------------------------------------------------------`
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
      .setDescription(
        `Ototag log kanalı; ${kanal}\nTagı; ${tag} olarak ayarlandı!`
      );
    message.channel.send(embed);

    db.set(`ototagk_${message.guild.id}`, kanal.id);
    db.set(`ototag_${message.guild.id}`, tag);
  } else {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      const embed = new Discord.RichEmbed()
        .setDescription(`Unfortunately, you are not authorized to use this command.`)
        .setColor("BLACK");

      message.channel.send(embed);
      return;
    }

    let tag = args[1];
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `There is something missing! You must specify a log channel!\nExample; ${prefix}autotag <#Channel> <Tag>\n--------------------------------------------------------`
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
    if (!tag) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `There is something missing! You must specify a tag!\nExample; ${prefix}autotag <#Channel> <Tag>\n--------------------------------------------------------`
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
      .setDescription(
        `Autotag log channel; ${kanal}\nTag; set to ${tag}!`
      );
    message.channel.send(embed);

    db.set(`ototagk_${message.guild.id}`, kanal.id);
    db.set(`ototag_${message.guild.id}`, tag);
  }
};
exports.conf = {
  aliases: ["autotag"],
  permLevel: 3,
  enabled: true,
  guildOnly: true
};
exports.help = {
  name: "ototag",
  description: "ototag",
  usage: "ototag"
};
