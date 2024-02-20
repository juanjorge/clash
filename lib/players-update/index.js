const { request } = require('../../utils/request');
const { findPlayerAndUpdate, findAllPlayersToCheck } = require('../../utils/database');

module.exports.handlePlayersUpdate = async () => {
  try {
    const playersToCheck = await findAllPlayersToCheck();
    const tags = playersToCheck.map(({ tag }) => encodeURIComponent(tag));

    const players = [];
    for (let i = 0; i < tags.length; i++) {
      const { data } = await request(`players/${tags[i]}`);
      const result = await findPlayerAndUpdate(data);
      players.push(result);
    }

    return {
      result: 'ok',
      playersUpdated: players.length,
    };
  } catch (error) {
    console.error("Error fetching data", error);
    return {
      result: 'error',
      error,
    }
  }
};