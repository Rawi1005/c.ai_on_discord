const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const axios = require('axios');


const channelId = '1270189477821808804'; // Replace with your specific channel ID

// Authenticate with the AI service when the bot starts


// Event listener for when the bot is ready
client.once('ready', () => {
    console.log('Bot is online!');
});

// Event listener for incoming messages
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots
    if (message.channel.id !== channelId) return; // Ignore messages outside the specified channel

    const reaction = message.react('⏳');
    message.channel.sendTyping();
    
    const requestData = {
      question: message.content
    };
    console.log('Start Request Api');
    const response = axios.post('http://localhost:3555/ai', requestData)
    
    .then(response => {
      const answer = response.data.text;
     
  
      message.reply(answer);
      message.react('✅');
      
    
      console.log('Done');
    })
    .catch(error => {
    
  
      message.react('❌');
      console.error('Error:', error);
    });
});

// Login to Discord with your bot's token
client.login('YOUR_BOT_TOKEN_HERE');
