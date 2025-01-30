const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const clientId = '1333786215282905158'; // Remplacez par l'ID de votre application Discord

RPC.register(clientId);

client.on('ready', () => {
    console.log('Rich Presence actif pour VSCode !');
    const randomNumber = Math.floor(Math.random() * 5); // Int entre 0 et 4
    // Tabl de JSON perso 
    activities = [
      { details: "En duel avec le code", state: "Combat des algos terrifiants" },
      { details: "Gastronomie de code", state: "Démêle un plat de spaghettis" },
      { details: "Archéologie de code", state: "Retour dans du code legacy" },
      { details: "Dépannage de code", state: "Répare un code planté " },
      { details: "Désinsectisation de code", state: "A l'affût des bugs" },
    ];



    client.setActivity({
        details: activities[randomNumber]['details'],
        state: activities[randomNumber]['state'],
        startTimestamp: Date.now(),
        largeImageKey: 'VSCode', // Image que vous téléchargez dans Discord Developer Portal
        largeImageText: 'Visual Studio Code',
        smallImageKey: 'coding', // Image facultative
        smallImageText: 'Focus mode',
    });
});

client.login({ clientId }).catch(console.error);
