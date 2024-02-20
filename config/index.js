module.exports.config = {
  coc: {
    host: process.env.COC_API_URL,
    token: process.env.COC_API_TOKEN,
    version: process.env.COC_API_VERSION,
  },
  db: {
    mongo: {
      uri: process.env.MONGODB_URI,
      dbName: process.env.MONGODB_DB,
    },
  }
};
