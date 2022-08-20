const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      "**▬▬▬▬▬▬[** ©️ **Zivo Kayıt Botu** ©️ **]▬▬▬▬▬▬**  **  ** Prefixim: `!`"
    )
    .setThumbnail(
      "https://media4.giphy.com/media/62PP2yEIAZF6g/giphy.gif?cid=ecf05e475m0k5f5nyfpvvouz0w9vp9ge67svvkdbdugonhqv&rid=giphy.gif&ct"
    )
    .setDescription(
      `
**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**
> **» !kayıt-kanal :** Kayıt yapılacak kanal ayarla.
> **» !kız-rol :** Kız rol ayarla.
> **» !erkek-rol :** Erkek rol ayarla.
> **» !yetkili-rol :** Kayıt edicek yetkili ayarla.
> **» !e :** Erkek kayıt..
> **» !k :** Kız kayıt.
> **» !a-rol :**Kayıt sonrası alınacak rol ayarla.
> **» !yetkili :** Yetkili rolü verir.
**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/JhFrP2wVx3)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: !yardım**
> :bulb: **Discord Js Sürümü: 12.5.3**
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/JhFrP2wVx3)** **•** **[Botun Davet Linki](https://discord.gg/JhFrP2wVx3)** **•** **[Web-Site]( https://discord.gg/JhFrP2wVx3)**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};