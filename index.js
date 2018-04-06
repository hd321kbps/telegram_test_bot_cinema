const TelegramBot = require ('node-telegram-bot-api');
const Debug = require('./helpers');
const fs = require('fs');
const TOKEN = '581192924:AAG9boIAzV0lvpSNfq_uCZMstQUFUzzuMI8';
const bot = new TelegramBot(TOKEN,{
    //polling:true
    polling:{
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})
console.log('Bot has been started...');
// bot.on('message', msg=>{
//     console.log(msg);
//     const {id} = msg.chat;
//     // if(msg.text.toLowerCase() == 'hello'){
//     //     bot.sendMessage(id, `Привет, ${msg.from.first_name}`);
//     // }
//     // else{
//     //     bot.sendMessage(id, Debug(msg));
//     // }
//     bot.sendMessage(id, Debug(msg))
//         .then(() =>{
//             console.log('Message has been send.');
//         })
//         .catch((error) =>{
//             console.error(error);
//         })
// })
// bot.onText(/\/start/, msg => {
//     const {id} = msg.chat;
//     bot.sendMessage(id, Debug(msg))
// })
// bot.onText(/\/help (.+)/, (msg, [sourse, match]) => {
//     const {id} = msg.chat;
//     bot.sendMessage(id, Debug(match))
// })
// bot.on('message', msg => {
//     const html = `<strong>Hello, ${msg.from.first_name}</strong><i>Test message</i><pre>${Debug(msg)}</pre>`
//     bot.sendMessage(msg.chat.id, html, {
//         parse_mode: 'HTML'
//     })
// })
// bot.on('message', msg => {
//     const markdown = `
//     *Hello, ${msg.from.first_name}
//     *_Test message_
//     `
//     bot.sendMessage(msg.chat.id, markdown, {
//         parse_mode: 'Markdown'
//     })
// })
// bot.on('message', msg => {
//     setTimeout(() => {
//         bot.sendMessage(msg.chat.id, 'https://core.telegram.org/bots/api#sendmessage', {
//             disable_web_page_preview: true,
//             disable_notification: true
//         })
//     }, 4000)
// })
// bot.on('message', msg => {
//     const chatId = msg.chat.id
//     if(msg.text === 'Закрыть'){
//         bot.sendMessage(chatId, 'Закрываю клавиатуру', {
//             reply_markup:{
//                 remove_keyboard: true
//             }
//         })
//     }
//     else if(msg.text === 'Ответить'){
//         bot.sendMessage(chatId, 'Отвечаю', {
//             reply_markup:{
//                 force_reply: true
//             }
//         })
//     }
//     else{
//         bot.sendMessage(chatId, 'Клавитатура', {
//             reply_markup:{
//                 keyboard: [
//                     [{
//                         text: 'Отправить местоположение',
//                         request_location: true
//                     }],
//                     ['Ответить', 'Закрыть'],
//                     [{
//                         text: 'Отправить контакт',
//                         request_contact: true
//                     }]
//                 ],
//                 one_time_keyboard: true
//             }
//         })
//     }
// })
// bot.on('message', msg => {
//     const chatId = msg.chat.id
//     bot.sendMessage(chatId, 'Inline keyboard', {
//         reply_markup: {
//             inline_keyboard: [
//                 [
//                     {
//                         text: 'Google',
//                         url: 'https://google.com'
//                     }
//                 ],
//                 [
//                     {
//                         text: 'Reply',
//                         callback_data: 'reply'
//                     },
//                     {
//                         text: 'Forward',
//                         callback_data: 'forward'
//                     }
//                 ]
//             ]
//         }
//     })
// })
// bot.on ('callback_query', query => {
//     // bot.sendMessage(query.message.chat.id, Debug(query))
//     bot.answerCallbackQuery(query.id, `${query.data}`)
// })
// bot.on('inline_query', query => {
//     const results = []
//     for (let i=0; i<5; i++){
//         results.push({
//             type: 'article',
//             id: i.toString(),
//             title: 'Title ' + i,
//             input_message_content: {
//                 message_text: `Article #${i+1}`
//             }
//         })
//     }
//     bot.answerInlineQuery(query.id, results, {
//         cache_time: 0
//     })
// })
// const inline_keyboard = [
//     [
//         {
//             text: 'Forward',
//             callback_data: 'forward'
//         },
//         {
//             text: 'Reply',
//             callback_data: 'reply'
//         }
//     ],
//     [
//         {
//             text: 'Edit',
//             callback_data: 'edit'
//         },
//         {
//             text: 'Delete',
//             callback_data: 'delete'
//         }
//     ]
// ]
// bot.on('callback_query', query => {
//     const {chat, message_id, text} = query.message
//     switch (query.data) {
//         case 'forward':
//             // Куда Откуда Что
//             bot.forwardMessage(chat.id, chat.id, message_id)
//             break
//         case 'reply':
//             bot.sendMessage(chat.id, 'Отвечаем на сообщение', {
//                 reply_to_message_id: message_id
//             })
//             break
//         case 'edit':
//             bot.editMessageText(`${text} (edited)`, {
//                 chat_id: chat.id,
//                 message_id: message_id,
//                 reply_markup:{inline_keyboard}
//             })
//             break
//         case 'delete':
//             bot.deleteMessage(chat.id, message_id)
//             break
//     }
//     bot.answerCallbackQuery({
//         callback_query_id: query.id
//     })
// })
// bot.onText(/\/start/, (msg, [sourse, match]) => {
//     const chatId = msg.chat.id
//     bot.sendMessage(chatId, 'Keyboard', {
//         reply_markup:{
//             inline_keyboard
//         }
//     })
// })

// bot.onText(/\/pic/, msg => {
//     bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/cat.jpg'))
// })
// bot.onText(/\/pic2/, msg => {
//     bot.sendPhoto(msg.chat.id, './cat.jpg', {
//         caption: 'This a cat photo'
//     })
// })
// bot.onText(/\/audio/, msg => {
//     bot.sendAudio(msg.chat.id, './wind_of_change.mp3')
// })
// bot.onText(/\/audio2/, msg => {
//     bot.sendMessage(msg.chat.id, 'Start audio uploading...')
//     fs.readFile(__dirname + '/wind_of_change.mp3', (err, data) => {
//         bot.sendAudio(msg.chat.id, data).then(() => {
//             bot.sendMessage(msg.chat.id, 'Finish audio uploading...')
//         })
//     })
// })
// bot.onText(/\/doc1/, msg => {
//     bot.sendDocument(msg.chat.id, './wfm.xlsx')
// })
// bot.onText(/\/doc2/, msg => {
//     bot.sendMessage(msg.chat.id, 'Upload start..')
//     fs.readFile(__dirname + '/wfm.zip', (err, file) => {
//         bot.sendDocument(msg.chat.id, file, {
//             caption: 'Additional text'
//         }).then(() => {
//             bot.sendMessage(msg.chat.id, 'Upload Finish')
//         })
//     })
// })
// bot.onText(/\/s1/, msg => {
//     bot.sendSticker(msg.chat.id, './sticker.webp')
// })
// bot.onText(/\/s2/, msg => {
//     fs.readFile(__dirname + '/sticker.webp', (err, sticker) => {
//         bot.sendSticker(msg.chat.id, sticker)
//     })
// })
// bot.onText(/\/video1/, msg => {
//     bot.sendVideo(msg.chat.id, './small.mp4')
// })
// bot.onText(/\/video2/, msg => {
//     fs.readFile(__dirname + '/small.mp4', (err, video) => {
//         bot.sendVideo(msg.chat.id, video)
//     })
// })
// bot.onText(/\/loc/, msg => {
//     //59.928831, 30.360586
//     bot.sendLocation(msg.chat.id, 59.928831, 30.360586)
// })
// bot.onText(/\/contact/, msg => {
//     bot.sendContact(msg.chat.id, '89292002000', 'WebForMyself', {
//         last_name: 'Surname'
//     })
// })
//381764678:TEST:4896 токен яндекс касса
bot.onText(/\/pay/, msg => {
    const chatId = msg.chat.id
    bot.sendInvoice(
        chatId,
        'Audi A4',
        'Best car',
        'payload',
        '381764678:TEST:4896',
        'SOME_RANDOM_STRING_KEY',
        'RUB',
        [
            {
                label: 'audi_a4',
                amount: 300000
            }
        ],
        {
            photo_url: 'https://s1.1zoom.ru/big7/153/Audi_2015_A4_quattro_477985.jpg',
            need_name: true,
            is_flexible: true
        }
    )
})