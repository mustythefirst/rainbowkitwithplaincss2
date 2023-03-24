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

function Example() {
  return (
    <>
      <Card style={cardStyle}>
        <CardImg
          alt="..."
          src="/taylorswiftjpg.jpg"
          top
        ></CardImg>
        <CardBody>
          <CardTitle></CardTitle>
          <CardText>
            <h6>Taylor Swift</h6>
            <p>Watch Taylor Swift Live @ Maddison Square Gardens</p>
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

export default Example;