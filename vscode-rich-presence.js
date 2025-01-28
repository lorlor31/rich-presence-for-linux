const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const clientId = '1333786215282905158'; // Remplacez par l'ID de votre application Discord

RPC.register(clientId);

client.on('ready', () => {
    console.log('Rich Presence actif pour VSCode !');
    client.setActivity({
        details: 'Édition de code',
        state: 'Sur des bugs prises de tête',
        startTimestamp: Date.now(),
        largeImageKey: 'VSCode', // Image que vous téléchargez dans Discord Developer Portal
        largeImageText: 'Visual Studio Code',
        smallImageKey: 'coding', // Image facultative
        smallImageText: 'Focus mode',
    });
});

client.login({ clientId }).catch(console.error);
