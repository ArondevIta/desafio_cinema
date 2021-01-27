const express = require("express");
const routes = express.Router();

const MovieController = require("./controllers/MovieController");

routes.get("/movies", MovieController.index);
routes.post("/movie", MovieController.store);
routes.delete("/movie/:id", MovieController.drop);

module.exports = routes;
