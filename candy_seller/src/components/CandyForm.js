import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function CandyForm({ addCandyToCart }) {
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");
  const [price, setPrice] = useState("");

  const handleAddCandy = (e) => {
    e.preventDefault();
    addCandyToCart({ name, percentage, price });
    setName("");
    setPercentage("");
    setPrice("");
  };

  return (
    <Form onSubmit={handleAddCandy} className="mb-4">
      <Row>
        <Col md={4}>
          <Form.Group controlId="formCandyName">
            <Form.Label>Candy Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter candy name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formCandyPercentage">
            <Form.Label>Candy Percentage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter candy percentage"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formCandyPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit" className="mt-3">
        Add Candy to Cart
      </Button>
    </Form>
  );
}

export default CandyForm;
