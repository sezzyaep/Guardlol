const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let msj = args.slice(0).join(" ")
  client.users.forEach(x => {
    x.send(msj)
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gecikme"],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "ping",
  usage: "ping"
};
