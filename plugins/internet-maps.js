import imageToBase64 from 'image-to-base64'
import axios from "axios"
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
let str = `
*Hasil Pencarian Daerah :*
${text}
`.trim()

    axios.get('https://mnazria.herokuapp.com/api/maps?search=' + text)
    .then((res) => {
      imageToBase64(res.data.gambar)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'peta.jpg', str, m)
        })
    })
}

handler.help = ['peta <wilayah>']
handler.tags = ['internet']
handler.command = /^(peta|map)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.exp = 0
handler.limit = true

export default handler
