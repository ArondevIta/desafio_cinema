import React, { useState } from "react";
import { Form, Container, Col, Row, Card, Toast } from "react-bootstrap";
import { FaSearch, FaStar } from "react-icons/fa";
import api from "../../services/api";

import "./style.css";

function Search() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.get(`/search?title=${title}`);
    setMovies(response.data);
  }

  async function handleAddFavorite(imdb) {
    const data = { imdb };
    await api.post("movie", data);
    toggleShowA();
  }

  return (
    <div>
      <Col className="block-search">
        <Form onSubmit={handleSubmit} className="search-container">
          <Row>
            <Form.Group as={Col}>
              <Form.Control
                className="input-search"
                placeholder="Pesquisar por título do filme"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <FaSearch
              id="search"
              className="search-icon"
              onClick={handleSubmit}
            />
          </Row>
        </Form>
      </Col>

      <Container className="container-movies" fluid>
        <Toast className="ml-auto" show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="ml-auto"></strong>
          </Toast.Header>
          <Toast.Body>Filme adicionado aos favoritos!</Toast.Body>
        </Toast>
        <Col className="block-movies">
          <Row>
            {movies.Search &&
              movies.Search.map((movie) => (
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
    </div>
  );
}

export default Search;
