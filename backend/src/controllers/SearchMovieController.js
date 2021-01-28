const axios = require("axios");

module.exports = {
  async index(req, res) {
    const { t } = req.query;
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=925eba28&s=${t}`
    );

    const newData = [];

    response.data.Search.map(({ Title, Year, imdbID, Type, Poster }) => {
      const data = {
        title: Title,
        year: Year,
        imdb: imdbID,
        type: Type,
        poster: Poster,
      };
      newData.push(data);
    });

    return res.json(newData);
  },
};
