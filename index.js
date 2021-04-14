const tmi = require('tmi.js');

const opts = {
  identity: {
    username: "duckinsaucebot",
    password: "oauth:knhulb0adnjbn6jjhx88mbsuker8wl"
  },
  channels: ["patoaomolho"]
};


const client = new tmi.client(opts);
client.connect();

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);


function onMessageHandler (target, context, msg, self) {
  if (self) { return; } 

  const commandName = msg.trim();


  if (commandName === '!pato') {
    client.say(target, `Oi, sou o patobot`);
    console.log(`* Executed ${commandName} command`);
  } else if(commandName === '!numero'){
    const num = numero();
    client.action(target, `Seu número é ${num}.`);
    console.log(`*  Executed ${commandName} command`);
  } else{
    console.log(`* Unknown ${commandName} command`);
  }
}

function numero () {
    return Math.floor(Math.random() * 100 + 1);
  }

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}