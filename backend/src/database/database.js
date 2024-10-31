const knex = require('knex');

// Configuration de la connexion à la base de données SQLite
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './src/database/database.db',
  },
  useNullAsDefault: true, // Nécessaire pour SQLite
});

module.exports = db;