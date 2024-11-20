const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importa los modelos
db.appoinments = require("./appoinment.model.js")(sequelize, Sequelize);
db.clients = require("./client.model.js")(sequelize, Sequelize);

// Define las relaciones
db.clients.hasMany(db.appoinments, { foreignKey: 'clientId', as: 'client' });
db.appoinments.belongsTo(db.clients, { foreignKey: 'clientId', as: 'client' });

module.exports = db;