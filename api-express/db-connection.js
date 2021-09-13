var pgp = require("pg-promise")(/* options */);
const dotenv = require("dotenv"); // Set path to .env file
dotenv.config({ path: "./.env" });

// move the credentials to env vars
var db = pgp(process.env.DATABASE_URL);

module.exports = db;
