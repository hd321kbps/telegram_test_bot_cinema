module.exports = {
    logStart() {
        console.log('Bot has been started ...')
    },
    getChatId(msg) {
        return msg.chat.id
    },
    // Убираем первых 2 символа /ff567 = f567
    getItemUuid(source) {
        return source.substr(2, source.length)
    }
}