const  Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!";

bot.on('ready', function(){
console.log("Je suis la !");
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '!Salut'){
            message.reply('Peuple !');
        
        }  
    }            
});

bot.login ('NDg0ODQ0ODQwNTE3ODk0MTQ1.Dmn6sw.ZT1ovSD0E69dQK7W1yE-QbyFl-M') //Token