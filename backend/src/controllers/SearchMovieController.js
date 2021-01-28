const axios = require("axios");

module.exports = {
  async index(req, res) {
    const { title } = req.query;
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=925eba28&s=${title}`
    );

    const newData = response.data.Search.map(
      ({ Title, Year, imdbID, Type, Poster }) => {}
    );

    return res.json(newData);
  },
};
