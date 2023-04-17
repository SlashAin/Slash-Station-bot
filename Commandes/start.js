const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://naaSslash:Mohamed-200226@slashstation.l5avluh.mongodb.net/?retryWrites=true&w=majority"

module.exports = {
  name: 'start',
  usage: ['start'],
  description: "Démarre ton aventure !",
  on: true,
  permission: "Aucune",
  dm: true,
  async run(bot, db, message, sender, args) {
    // Connexion à la base de données MongoDB
    const client = new MongoClient(process.env.MONGO_URI, { useUnifiedTopology: true });
    await client.connect();
    const database = client.db('SlashStation');
    const collection = database.collection('users');

    // Vérifie si l'utilisateur a déjà un inventaire
    const inventory = await collection.findOne({ user_id: bot.user.id });
    if (inventory) {
      return bot.reply({ content: "Vous avez déjà un inventaire.", ephemeral: true });
    }

    // Crée un nouvel inventaire pour l'utilisateur
    const newInventory = {
      user_id: bot.user.id,
      items: ['Un sabre laser', 'Une armure technomagique']
    };
    await collection.insertOne(newInventory);

    // Ferme la connexion à la base de données MongsoDB
    await client.close();

    // Envoie un message de confirmation à l'utilisateur
    return bot.reply({
      embeds: [{
        title: "Inventaire créé !",
        description: "Votre inventaire a été créé avec succès.",
        color: (bot.color),
        fields: [
          { name: "Objets", value: newInventory.items.join('\n') }
        ]
      }]
    });
  },
};

