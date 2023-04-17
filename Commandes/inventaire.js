const { MongoClient } = require('mongodb');

module.exports = {
  name: 'inventaire',
  usage: ['inventaire'],
  description: "Affiche ton inventaire !",
  on: true,
  permission: "Aucune",
  dm: true,
  async run(bot, db, message, sender, args) {
    // Connexion à la base de données MongoDB
    const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const database = client.db('SlashStation');
    const collection = database.collection('users');

    // Vérifie si l'utilisateur a un inventaire
    const inventory = await collection.findOne({ user_id: message.user.id });
    if (!inventory) {
      await client.close();
      return bot.reply({ content: "Vous n'avez pas encore d'inventaire.", ephemeral: true });
    }

    // Envoie l'inventaire de l'utilisateur
    await client.close();
    return bot.reply({
      embeds: [{
        title: "Inventaire de " + message.user.username,
        description: "Voici votre inventaire :",
        color: (bot.color),
        fields: [
          { name: "Objets", value: inventory.items.join('\n') }
        ]
      }]
    });
  },
};
