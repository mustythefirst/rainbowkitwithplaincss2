import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

const cardStyle = { width: "18rem" };

function Exampletwo() {
  return (
    <>
      <Card style={cardStyle}>
        <CardImg
          alt="..."
          src="/justinbieber.jpg"
          top
        ></CardImg>
        <CardBody>
          <CardTitle></CardTitle>
          <CardText>
            <h6>Justin Bieber</h6>
            <p>Watch Justin Bieber Live @ Maddison Square Gardens</p>
            <p>$59.99</p>
          </CardText>
          <Button color="primary" href="javascript:;">
            Buy Now
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default Exampletwo;