import React, { useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import api from "../../services/api";

function CardMovies(props) {
  async function handleAddFavorite(imdb) {
    const data = { imdb };
    await api.post("movie", data);
    // toggleShowA();
  }

  return (
    <Container className="container-movies">
      <Col className="block-movies">
        <Row>
          {props.movies.Search &&
            props.movies.Search.map((movie) => (
              <Card key={movie.imdbID} className="card-movie">
                <Card.Img variant="top" src={movie.Poster} height={250} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <span>
                    <span style={{ fontWeight: "bold" }}>Ano:</span>&nbsp;
                    {movie.Year}
                  </span>
                  <a href="#search">
                    <FaStar
                      className="star-icon"
                      onClick={() => handleAddFavorite(movie.imdbID)}
                    />
                  </a>
                </Card.Footer>
              </Card>
            ))}
        </Row>
      </Col>
    </Container>
  );
}

export default CardMovies;
