# CREATION D UN SCRIPT POUR AFFICHER UNE RICH PRESENCE CUSTOM DISCORD

1. Vérifier que node et discord sont bien installés
sudo apt install nodejs npm
npm install discord-rpc
2. Créez un fichier vscode-rich-presence.js :

```js
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const clientId = 'VOTRE_CLIENT_ID_DISCORD'; // Remplacez par l'ID de votre application Discord

RPC.register(clientId);

client.on('ready', () => {
    console.log('Rich Presence actif pour VSCode !');
    client.setActivity({
        details: 'Édition de code',
        state: 'Sur un projet passionnant',
        startTimestamp: Date.now(),
        largeImageKey: 'vscode', // Image que vous téléchargez dans Discord Developer Portal
        largeImageText: 'Visual Studio Code',
        smallImageKey: 'coding', // Image facultative
        smallImageText: 'Focus mode',
    });
});

client.login({ clientId }).catch(console.error);

```
3. Créez une app Discord sur le portail développeur Discord et récupérer l'application ID pour la mettre dans le script, mettre une image etc...

4. Lancer le script
node vscode-rich-presence.js
