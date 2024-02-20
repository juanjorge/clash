const axios = require("axios");
const {config} = require("../config");

module.exports.request = async (path) => axios.get(
  `${config.coc.host}/${config.coc.version}/${path}`,
  {
    headers: {
      Authorization: `Bearer ${config.coc.token}`,
    }
  }
);
