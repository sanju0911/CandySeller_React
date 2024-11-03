import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import CandyForm from "./components/CandyForm";
import CandyList from "./components/CandyList";
import Cart from "./components/Cart";
import { Button, Modal } from "react-bootstrap";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Sample candies to display
  const initialCandies = [
    { name: "Chocolate Bar", percentage: "50%", price: 1.5 },
    { name: "Gummy Bears", percentage: "30%", price: 2.0 },
    { name: "Lollipop", percentage: "20%", price: 0.75 },
    { name: "Jelly Beans", percentage: "10%", price: 1.25 },
    { name: "Mint Candies", percentage: "15%", price: 0.5 },
    { name: "Sour Straws", percentage: "25%", price: 1.0 },
    { name: "Candy Corn", percentage: "40%", price: 1.75 },
    { name: "Caramel Chews", percentage: "60%", price: 2.5 },
    { name: "Toffee", percentage: "70%", price: 3.0 },
    { name: "Rock Candy", percentage: "5%", price: 1.0 },
  ];

  const addCandyToCart = (candy) => {
    setCart((prevCart) => [...prevCart, candy]);
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <Container className="mt-4">
      <h1 className="text-center">Candy Seller</h1>
      <Button
        variant="primary"
        onClick={handleShowCart}
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        Cart ({cart.length})
      </Button>
      <CandyForm addCandyToCart={addCandyToCart} />
      <CandyList candies={initialCandies} addToCart={addCandyToCart} />

      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart cartItems={cart} />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default App;
