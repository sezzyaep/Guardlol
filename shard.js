const Discord = require("discord.js");
const bot = new Discord.Client();
const express = require("express");
const app = express();
const http = require("http");
const coderlab = new Discord.ShardingManager("./bot.js", {
  totalShards: 1,
  token: "NjY1MjMyNjMzNTI5MzY4NTc2.Xh9R7g.hDmZrjSAvVoqXaqgyK2MSEA83yc"
});

coderlab.spawn();

coderlab.on("launch", shard => {
  console.log(`${shard.id} id.`);

});

setTimeout(() => {
  coderlab.broadcastEval("process.exit()");
}, 21600000);
