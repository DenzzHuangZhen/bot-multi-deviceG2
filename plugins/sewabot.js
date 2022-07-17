import fetch from 'node-fetch'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn }) => {
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
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
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
handler.help = ['sewabot']
handler.tags = ['main']
handler.command = /^(sewabot)$/i

export default handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
