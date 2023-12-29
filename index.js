import {Client, IntentsBitField} from "discord.js";
import * as dotenv from "dotenv";
dotenv.config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if(message.content === "hello") {
        message.reply("Salve Cria!");
    };
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if(message.content === "what is your name") {
        message.reply('My name is Botinho do mal!');
    };
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if(message.content === "who gave you that name") {
        message.reply("my boss Thiaguinho");
    };
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if(message.content === "do you know him") {
        message.reply("kakaka do you know him?");
    };
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if(message.content === "yes I know him") {
        message.reply("oh cool, he seems like a really good person!");
    };
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if(message.content === "Yes, he is") {
        message.reply("Great!");
    };
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if(message.content === "but tell me a little about yourself") {
        message.reply("Ah, I'm a bot developed by Thiago that only has the function of asking routine questions!");
    };
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return
    
    if(message.content === "kakaka, you speak as if you were a human being") {
        message.reply("Thanks, I think that's his intention!");
    };
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if(message.content === 'I also think') {
        message.reply("This is the function of a kakakak bot, I think!");
    };
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if(message.content === "kakaka, it's not what I think") {
        message.reply("What you think doesn't matter!");
    };
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if(message.content === "Wow, hasn't he taught you how to be polite yet?") {
        message.reply("It was just a joke, sorry!");
    };
});

client.on('ready', (e) => {
    console.log(`${e.user.tag} Está disponível!`);
});

client.login(process.env.TOKEN);