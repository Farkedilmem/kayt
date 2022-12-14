const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let member = message.mentions.members.first();
if (!kayıtçı) return message.channel.send(`**Kayıtçı Rolü Ayarlanmadığı İçin Bu Komudu Kullanamazsınız !** ❌ `)
if (!member) return message.channel.send(`**Kayıtçı Rolü Vereceğiniz Kullanıcıyı Belirtiniz !** ❌`)

member.roles.add(kayıtçı) 
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kayıtçı Rolü Verildi `)
.setColor('BLACK')
.setDescription(`${member} Adlı Kullanıcıya Kayıtçı Rolü Verildi ✅ `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
 db.set(`kayıtsayı_${member.id}`, 1) 
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['yetkili'],
  permlevel: 0
}
exports.help = {
  name: 'yetkili',
  description: 'kayıtçı rolü verir',
  usage: '!yetkili @kullanıcı'
}