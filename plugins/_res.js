import fetch from "node-fetch"
import { readFileSync } from "fs"



export async function all(m) {

  //Kalo mau menggokil pake ini
  let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
  let stc1 = readFileSync('./sticker/ress1.webp')
  let stc2 = readFileSync('./sticker/ress2.webp')
  let stc3 = readFileSync('./sticker/ress3.webp')
  let stc4 = readFileSync('./sticker/ress4.webp')
  let stc5 = readFileSync('./sticker/ress5.webp')
  let stc6 = readFileSync('./sticker/ress6.webp')
  let stc7 = readFileSync('./sticker/ress7.webp')
  let stc8 = readFileSync('./sticker/ress8.webp')
  let stc9 = readFileSync('./sticker/ress9.webp')
  let vr = ['stc1', 'stc2', 'stc3', 'stc4', 'stc5', 'stc6', 'stc7', 'stc8', 'stc9']
  let stc = vr.getRandom()

if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // ketika ditag 
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6282195322106',
title: '「 ❔ 」',
body: wm,
sourceUrl: 'http://github.com/AyGemuy', thumbnail: await( await fetch(pp)).buffer()
 //Kalo mau ada pp dari sender/pengirimnya
 //Kalo mau ringan pake global.thumb                                                                                                              
                                                                                                               
          //thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
          
        }
    } catch (e) {
        return
    }

                                
}
