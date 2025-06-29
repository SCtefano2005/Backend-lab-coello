// Conexión central a Sequelize para PostgreSQL
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,     // nombre de la base de datos
  process.env.DB_USER,     // usuario
  process.env.DB_PASSWORD, // contraseña
  {
    host: process.env.DB_HOST, // host o URL proporcionada por Render
    port: 5432,                // puerto por defecto para PostgreSQL
    dialect: 'postgres',
    logging: false,           // true para ver queries en consola
  }
);

module.exports = sequelize;
