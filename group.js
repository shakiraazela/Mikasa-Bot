const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `ð° -----[ *GROUP MENU* ]----- ð°
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ NAMA : ${pushname}
âââ¸ LEVEL : ${getLevelingLevel(sender)}
âââ¸ USER ${botName} : ${_registered.length}
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ

ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ *${prefix}welcome* ã1/0ã
âââ¸ *${prefix}leveling* ã1/0ã
âââ¸ *${prefix}simih* ã1/0ã
âââ¸ *${prefix}nsfw* ã1/0ã
âââ¸ *${prefix}antilinkgrup* ã1/0ã
âââ¸ *${prefix}grup* ãbuka/tutupã
âââ¸ *${prefix}add*
âââ¸ *${prefix}kick*
âââ¸ *${prefix}hedsot*
âââ¸ *${prefix}linkgrup*
âââ¸ *${prefix}promote*
âââ¸ *${prefix}demote*
âââ¸ *${prefix}setname*
âââ¸ *${prefix}setdesc*
âââ¸ *${prefix}leave*
âââ¸ *${prefix}tagall*
âââ¸ *${prefix}admin*
âââ¸ *${prefix}level*
âââ¸ *${prefix}fitnah*
âââ¸ *${prefix}hidetag*
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
ð°[ *POWERED BY ${ownerName}* ]ð°`
}
exports.groupm = groupm