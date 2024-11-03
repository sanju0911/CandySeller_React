import React from "react";
import { ListGroup, Card } from "react-bootstrap";

function Cart({ cartItems }) {
  return (
    <Card>
      <Card.Header>Cart</Card.Header>
      <ListGroup variant="flush">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - ${item.price}
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>The cart is empty.</ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  );
}

export default Cart;
