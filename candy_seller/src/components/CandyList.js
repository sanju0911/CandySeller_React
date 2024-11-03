import React from "react";
import { Table, Button } from "react-bootstrap";

function CandyList({ candies, addToCart }) {
  return (
    <div>
      <h2>Candy Store</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>Price</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {candies.map((candy, index) => (
            <tr key={index}>
              <td>{candy.name}</td>
              <td>{candy.percentage}</td>
              <td>${candy.price}</td>
              <td>
                <Button variant="success" onClick={() => addToCart(candy)}>
                  Add to Cart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CandyList;
