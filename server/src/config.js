// Single source of environment configuration.
// Every other module reads from here, never from process.env directly,
// so dotenv loads exactly once and the dev-secret warning fires from one place.
const path = require('path');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'change-me';
const IS_DEV_SECRET = JWT_SECRET === 'change-me';
if (IS_DEV_SECRET) {
  // eslint-disable-next-line no-console
  console.warn(
    'WARNING: Using the default JWT_SECRET "change-me". ' +
      'Set JWT_SECRET in your .env file before any real use.'
  );
}

const PORT = Number(process.env.PORT) || 4000;
// db.js lives in src/, so resolve the db file one level up at server/server.db.
const DB_PATH = process.env.DB_PATH || path.join(__dirname, '..', 'server.db');

module.exports = { JWT_SECRET, PORT, DB_PATH, IS_DEV_SECRET };
