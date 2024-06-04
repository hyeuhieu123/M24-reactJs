import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function B3() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div style={{ display: "flex", gap: "20px" }}>
              <Button variant="primary">chi tiet</Button>
              <p style={{ marginTop: "5px" }}>30.000.000đ</p>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div style={{ display: "flex", gap: "20px" }}>
              <Button variant="primary">chi tet</Button>
              <p style={{ marginTop: "5px" }}>30.000.000đ</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
