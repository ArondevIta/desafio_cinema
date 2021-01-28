import React, { useState } from "react";
import { Form, Container, Col, Row, Toast } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import api from "../../services/api";

import CardMovies from "../../components/CardMovies";

import "./style.css";

function Search() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.get(`/search?t=${title}`);
    setMovies(response.data);
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

      <Container fluid>
        <Toast className="ml-auto" show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="ml-auto"></strong>
          </Toast.Header>
          <Toast.Body>Filme adicionado aos favoritos!</Toast.Body>
        </Toast>
        <CardMovies movies={movies} toggleShowA={toggleShowA} />
      </Container>
    </div>
  );
}

export default Search;
