const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktifim lan komutları yüklüyorum.`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } giriş yaptım koçum`
  );
  client.user.setStatus("online");
  var oyun = [
    "Zelvos'un kalbiyle",//bot durumu
    "Ben tatliş bi botum ❤️",
    "Kayıt Botu Altyapısı"

  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 3 * 2500);
};

