const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SOUND MENU* ]----- 🔰
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}iri*
┃│➸ *${prefix}pale*
┃│➸ *${prefix}candagodloking*
┃│➸ *${prefix}babycute*
┃│➸ *${prefix}cidro2*
┃│➸ *${prefix}gam2piri*
┃│➸ *${prefix}akusukakamu*
┃│➸ *${prefix}terpesona*
┃│➸ *${prefix}gajelas*
┃│➸ *${prefix}ndabisabasaingris*
┃│➸ *${prefix}paplepap*
┃│➸ *${prefix}paplepapslow*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰[ *POWERED BY ${ownerName}* ]🔰`
}
exports.sound = sound