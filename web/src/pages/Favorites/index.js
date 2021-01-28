import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardMovies from "../../components/CardMovies";

import api from "../../services/api";

import "./style.css";

function Favorites() {
  const [movies, setMovies] = useState([]);

  async function loadFavorites() {
    const response = await api.get("movies");

    setMovies(response.data);
  }

  function handleRemoveFavorite() {
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
          <CardMovies movies={movies} onClick={handleRemoveFavorite} />
        </Row>
      </Col>
    </Container>
  );
}

export default Favorites;
