const Discord = require('discord.js')
const client = new Discord.Client()
const ytdl = require('ytdl-core')
const streamOptions = { seek: 0, volume: 1  }
const broadcast = client.createVoiceBroadcast()

client.on('ready', () => {
})

client.on('message', (recievedMessage) => {
  if (recievedMessage.author == client.user) {
    return
  }

  if (recievedMessage.content.includes(client.user.toString())) {
    const voiceChannel = client.channels.get('421347180792512517')
    if (!voiceChannel) return console.error('The channel does not exist')
    voiceChannel.join()
      .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=ocQ6PDiP014', { fileter : 'audioonly' })
        broadcast.playStream(stream)
        const dispatcher = connection.playBroadcast(broadcast)
      })
      .catch(console.error)
  }
})

client.login("NTc0Nzk3NTE1NDg0ODIzNTUy.XM-oKg.nWKUK0XVHy_FhQg9nZL_SODT-m0")

