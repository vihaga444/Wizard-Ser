let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/DEVILSER/DEVILSER/main/Media/Ammu/reduced_IMG-20211219-WA0031_2.jpg")).buffer(), devil, 'ᴡɪᴢᴀʀᴅ sᴇʀ  ʙʏ ᴀᴊᴍᴀʟ ᴀɴᴅ ᴀᴄʜᴜ\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ මගේ YouTube Channel  එක subscribe කරන්න\https://youtube.com/channel/UCayoBJWM9lqcP8qr_xf8X8g \n\n\ © ᴛͥʜɪᴋⷶsᴀɴͫᴀ⁴⁩' , 'Hi තීක්ෂණ❤', 'Hi තීක්ෂණ❤', '☺කොහොමද ඔයාට ᴛͥʜɪᴋⷶsᴀɴͫᴀ', '☺කොහොමද ඔයාට ᴛͥʜɪᴋⷶsᴀɴͫᴀ,')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
