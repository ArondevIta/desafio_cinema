import React from "react";
import { Form, Container, Col, Row, Card } from "react-bootstrap";
import { FaSearch, FaStar } from "react-icons/fa";

import "./style.css";

function Search() {
  return (
    <div>
      <Col className="block-search">
        <Form className="search-container">
          <Row>
            <Form.Group as={Col}>
              <Form.Control
                className="input-search"
                placeholder="Pesquisar por título do filme"
              />
            </Form.Group>
            <FaSearch style={{ marginLeft: 10, marginTop: 20, fontSize: 30 }} />
          </Row>
        </Form>
      </Col>

      <Container>
        <Col className="block-movies">
          <Row>
            <Card className="card-movie">
              <Card.Img
                variant="top"
                src="https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
                height={250}
              />
              <Card.Body>
                <Card.Title>
                  Batman <FaStar style={{ float: "right" }} />
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Search;
