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

function Examplethree() {
  return (
    <>
      <Card style={cardStyle}>
        <CardImg
          alt="..."
          src="./chrisrockjpg.jpg"
          top
        ></CardImg>
        <CardBody>
          <CardTitle></CardTitle>
          <CardText>
            <h6>Chris Rock</h6>
            <p>Watch Chris Rock Live @ The 02 Arena</p>
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

export default Examplethree;