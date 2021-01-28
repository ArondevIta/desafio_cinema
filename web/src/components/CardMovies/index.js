import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import api from "../../services/api";

function CardMovies(props) {
  async function handleAddFavorite(imdb) {
    const data = { imdb };
    await api.post("movie", data);
    if (props.toggleShowA) {
      props.toggleShowA();
    }
  }

  async function handleRemoveFavorite(id) {
    await api.delete(`/movie/${id}`);
  }

  return (
    <Container className="container-movies">
      <Col className="block-movies">
        <Row>
          {props.movies &&
            props.movies.map((movie) => (
              <Card
                key={movie.imdb ? movie.imdb : movie._id}
                className="card-movie"
              >
                <Card.Img variant="top" src={movie.poster} height={250} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <span>
                    <span style={{ fontWeight: "bold" }}>Ano:</span>&nbsp;
                    {movie.year}
                  </span>
                  <a href={movie.imdb ? "#search" : ""}>
                    <FaStar
                      className={
                        movie.imdb ? "star-icon-home" : "star-icon-favorites"
                      }
                      onClick={() =>
                        movie.imdb
                          ? handleAddFavorite(movie.imdb)
                          : handleRemoveFavorite(movie._id)
                      }
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
