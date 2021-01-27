const express = require("express");
const routes = express.Router();

const MovieController = require("./controllers/MovieController");
const SearchMovieController = require("./controllers/SearchMovieController");

routes.get("/movies", MovieController.index);
routes.post("/movie", MovieController.store);
routes.delete("/movie/:id", MovieController.drop);

routes.get("/search", SearchMovieController.index);

module.exports = routes;
