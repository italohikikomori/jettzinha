const {Client, Intents} = require('discord.js')
const jettzinha = new Client({intents: [Intents.FLAGS.GUILDS]})
const dotenv = require('dotenv').config()
const heroku_port = process.env.PORT || 3000 /*Setting the Heroku port*/

jettzinha.once('ready', () => {
    /*Show this Console Log when the Bot start with success*/
    console.log('Jettzinha is on!')
    
    /*Bot Activity*/
    jettzinha.user.setActivity(
        'Revive me Jett',
        {
            type: 'STREAMING',
            url: 'https://www.twitch.tv/sorinhafps'
        }
    )
})

jettzinha.login(process.env.TOKEN)
