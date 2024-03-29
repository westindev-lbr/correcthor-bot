const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// console.log(token);

/**
 * Point de départ du bot
 * Création d'une nouvelle instance
 * pour communiquer avec l'API DISCORD */
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

/**
 * Affichage console quand le bot est prêt */
bot.once('ready', () => {
    console.log('Le bot a bien été initialisé!');
});

bot.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    }
    else if (commandName === 'user') {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
    }
});


bot.on('messageCreate', (msg) => {
    switch (msg.content) {
        case '!correcthor':
            msg.reply('Laisse-moi tranquille, vous avez tué 127 fois Molière dans ce serveur !');
            break;
        case '!slt':
            msg.reply('Salut mon petit, comment vas-tu ?');
            break;
        case '!corrige':
            msg.reply('Autant je veux bien, mais là, il y a plus de fautes que de lettre dans ton message');
            break;
        default:
            break;
    }
});

/**
 * Connexion à discord via le token */
bot.login(token);