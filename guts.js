const { Client, Attachment } = require('discord.js')
var fs = require('fs')

//new instance of a discord client
const client = new Client()

//stuff for playing yt vids
const ytdl = require('ytdl-core')
const streamOptions = { seek: 0, volume: 1  }
const broadcast = client.createVoiceBroadcast()


client.on('ready', () => {
  fs.readFile('./Content/greeting.txt', 'utf8', function (err, data) {
    if (err) throw err
    console.log(data)
  })
})

client.on('message', message => {
if (message.content === 'show me dem grasses') {
const attachment = new Attachment('./Content/grasses.jpg')
message.channel.send(attachment)
}
})

client.on('message', message => {

if (message.content === '!grasses') {
    const voiceChannel = client.channels.get('421347180792512517')
    if (!voiceChannel) return console.error('The channel does not exist')
    voiceChannel.join()
      .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=ocQ6PDiP014', { filter : 'audioonly' })
        broadcast.playStream(stream)
        const dispatcher = connection.playBroadcast(broadcast)
      })
      .catch(console.error)
}
else if ( message.content === '!stug') {
    const voiceChannel = client.channels.get('421347180792512517')
    if (!voiceChannel) return console.error('The channel does not exist')
    voiceChannel.join()
      .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=q-aBocBSKSg', { filter : 'audioonly' })
        broadcast.playStream(stream)
        const dispatcher = connection.playBroadcast(broadcast)
      })
      .catch(console.error)
}
})

client.on('message', message => {
if (message.content === '!help') {
  const content = fs.readFile('./Content/help.md', 'utf8', function (err, data) {
	message.channel.send(data)
  })
}
})

client.login(process.env.BOT_TOKEN)
