const { MongoClient } = require('mongodb');
const {config} = require("../config");

const mongoUri = config.db.mongo.uri;
const dbName = config.db.mongo.dbName;
const client = new MongoClient(mongoUri);

module.exports.findPlayerAndUpdate = async (data) => {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection('players');

    const result = await collection.findOneAndUpdate(
      { tag: data.tag },
      { $set: data },
      { upsert: true }
    );

    return result;
  } catch (error) {
    console.error("Error finding and updating player", error);
    return {
      error,
    }
  } finally {
    await client.close();
  }
};

module.exports.findAllPlayersToCheck = async () => {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection('playersToCheck');

    return await collection
      .find({ exclude: { $ne: true } })
      .project({ tag: 1, _id: 0 })
      .toArray();
  } catch (error) {
    console.error("Error finding all players", error);
    return {
      error,
    }
  } finally {
    await client.close();
  }
}
