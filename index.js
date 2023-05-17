require('dotenv').config();
const { Client, Events, ActivityType } = require('discord.js');

const client = new Client({ intents: 33539 });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        activities: [{ name: `With Toys`, type: ActivityType.Playing }],
        status: 'online'
    });

});

client.login(process.env.clToken);