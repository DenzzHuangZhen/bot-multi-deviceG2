export async function before(m, { conn, isAdmin, isBotAdmin }) {
		if (m.reaction.key.id.startsWith("BAE5") && m.reaction.key.id.length === 16) return
		let mesg = await store.loadMessage(m.reaction.key.remoteJid, m.key.id, conn)
		let frem = m.reaction.key.remoteJid.endsWith("@g.us") ? m.reaction.key.participant : m.reaction.key.remoteJid
		let frum = m.key.remoteJid.endsWith("@g.us") ? m.key.participant : m.key.remoteJid
		let rteks = `*【﻿ ${m.operation == "add" ? "ADD" : "DELETE"} REACTION 】*\n\n*Tagged:* @${
					(m.reaction.key.fromMe ? decodeJid(conn.user.id) : decodeJid(frem)).split("@")[0]
				}\n*To:* ${frum ? `@${frum.split("@")[0]}` : `-`}\n*Emoji:* ${
					m.operation == "add" ? m.reaction.text : "-"
				}`
		await this.sendButton(m.reaction.key.remoteJid, rteks, wm, hwaifu.getRandom(), [['MENU', '/menu']], m, { quoted: mesg, 
                mentions: this.parseMention(rteks)
            })
}
