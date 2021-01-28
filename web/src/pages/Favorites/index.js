import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import api from "../../services/api";

import "./style.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function loadFavorites() {
    const response = await api.get("movies");

    setFavorites(response.data);
  }

  async function handleRemoveFavorite(id) {
    await api.delete(`/movie/${id}`);
    loadFavorites();
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <Container fluid>
      <h3>Meus favoritos</h3>
      <Col className="block-movies">
        <Row>
          {favorites.map((movie) => (
            <Card key={movie.imdb} className="card-movie">
              <Card.Img variant="top" src={movie.poster} height={250} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <span>
                  <span style={{ fontWeight: "bold" }}>Ano:</span>&nbsp;
                  {movie.year}
                </span>
                <FaStar
                  className="star-icon"
                  onClick={() => handleRemoveFavorite(movie._id)}
                />
              </Card.Footer>
            </Card>
          ))}
        </Row>
      </Col>
    </Container>
  );
}

export default Favorites;
