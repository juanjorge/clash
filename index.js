require('dotenv').config();

const { handlePlayersUpdate } = require('./lib/players-update');

/**
 * Cloud Function to keep players synced.
 */
module.exports.handlePlayersUpdate = async () => handlePlayersUpdate();

if (require.main === module) {
  handlePlayersUpdate();
}
