const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', (join) => {
  console.log('I am Ready!');
  client.user.setActivity(`Future | Time Traveling Since Day 1!  `);
});
var prefix = "+"
client.on('message', message => {
    console.log(message)
if (message.content === '+deletechannel') {
  if (!message.member.roles.find("name", "Future-Bot Admin")) 
                message.channel.send('You need the \`Future-Bot Admin\` role to use this command.');
  else
  message.channel.delete()
}
  
    
      if (message.content === '+loganpaul') {  
        message.channel.send('Logan Paul **SUCKS**');
  }
      if (message.content === "+say")  {// creates command say
       if (!message.member.roles.find("name", "Future-Bot Admin")) 
        var sayMessage = message.content.string()
        message.channel.send(sayMessage);
    }

        if (message.content === '+jakepaul') {  
        message.channel.send('Jake Paul **SUCKS**');
        }
          if (message.content === '+Costs') {  
        message.channel.send('`Costs of things are here:` ```Premium - £25``` ```Premium+ - £50``` ``` Premium++ - £120``` ```  Premium+++ -  ON SALE £70 GET IT NOW```');
        }
      if (message.content === "+say") { // creates command say
        if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
        var sayMessage = message.content.substring(4)
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
    }
    if (message.content === '+Archer') {
    message.author.sendMesssage('`Info About Archer:`  ```Has been banned: NO``` ```Is Owner: YES``` ```Has Donated: YES```');
  }
    if (message.content === '+invite') {  
          message.channel.send('The invite code is: https://discord.gg/a59aDTm');
    }
  		if (message.content ==='+Store') {
		message.channel.send('Go to our website and store here: **https://minex-store.site123.me/**');
	}
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on("message", (message) => {
    if (message.content.startsWith("+kick")) {
  if (!message.member.roles.find("name", "Future-Bot Admin")) 
                message.channel.send('You need the \`Future-Bot Admin\` role to use this command.');
  else
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }
});
client.on("message", (message) => {
    if (message.content.startsWith("+ban")) {
  if (!message.member.roles.find("name", "Future-Bot Admin")) 
                message.channel.send('You need the \`Future-Bot Admin\` role to use this command.');
  else
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }
});

client.on('message', message => {
	// Please restart your project, isn't optimized and indentation is weird
        if (message.content.includes('fuck')) {
           message.delete()
          
    }
        if (message.content.includes == 'bitch') {
           message.delete()
          
    }
      if (message.content == 'Usman') {
           message.delete()
          
    }
    if (message.content === 'Usman') {
        message.reply('NO BAD LANGUAGE!!!');
    }
    if (message.content.includes('fuck')) {
        message.reply('NO BAD LANGUAGE!!!');
    }
    if (message.content.includes('bitch')) {
        message.reply('NO BAD LANGUAGE!!!');
    }
    if (message.content.includes('www.')) {
        message.delete();
    }
    if (message.content.includes('www.')) {
        message.reply('DO NOT ADVERTISE!!!');
    }
}); 


 client.on('BotToken')
