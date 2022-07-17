import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, command, text}) => {
const { generateWAMessageFromContent } = (await import('@adiwajshing/baileys')).default
if (command == 'sewabot') {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let pepe = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
  let baper = await fetch(pepe).then(a => a.buffer())
  let aine = nomorown + '@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `👋 Hai ${name}

*• SEWA BOT & UP TO PREMIUM •*
        
1. Grup / 30 Hari
Rp. 15.000 Dana
Rp. 15.000 Pulsa

2. Premium / 30 Hari
Rp. 10.000 Dana
Rp. 10.000 Pulsa

3. Premium + Grup / 30 Hari
Rp. 20.000 Dana
Rp. 20.000 Pulsa

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title: 'Klik untuk order',
  products:[{productId: '7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: nomorown + '@s.whatsapp.net'
  },
  footerText: 'https://s.id/Cerdasin62',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  
  // Kontak
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6282195322106:+62 821-9532-2106\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih owner ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, {quoted: m})
}

if (command == 'sewabots') {
if (!text) throw `Teksnya?`
  let prenya = await generateWAMessageFromContent(m.key.remoteJid,
{"productMessage": {
"product": {
		"productImage": {
		 "url": "https://mmg.whatsapp.net/d/f/AnSw-hoxnHkZZE5HfU3Hx8ErJYTt_onVglwSnFJE8x2c.enc",
"mimetype": "image/jpeg",
"fileSha256": "nDM/acIuR4SDh/ZKrS8ysfYlM2Z/RgAuikg9Bj1jK+s=",
"fileLength": "12295",
"height": 371,
"width": 558,
"mediaKey": "p95ebDGt25rIs76r5ymJxeuvKnhUEKQnTilft7z/JEo=",
"fileEncSha256": "NnBWPq0KgBt2VCN4zD4xg2N/gr/VgZdy8dNnEWqacRc=",
"jpegThumbnail": fs.readFileSync("./thumbnail.jpg")
},
"productId": "9999999",
	"title": wm, 
	"description": text,
	"productImageCount": 1
},
"businessOwnerJid": "0@s.whatsapp.net",
"contextInfo": {
	"forwardingScore": 9999,
	"isForwarded": false
}
}},{})
  conn.relayMessage(prenya.key.remoteJid,prenya.message,{messageId:prenya.key.id})
}
}
handler.help = ['sewabot']
handler.tags = ['main']
handler.command = ['sewabot', 'sewabots']

export default handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
