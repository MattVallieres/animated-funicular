import React from "react";
import Carousel from "react-bootstrap/Carousel";
import One from "../Images/One.jpg";
import Two from "../Images/Two.jpg";
import Three from "../Images/Three.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Contact from "../Images/Contact.jpg";
import Book from "../Images/Book.jpg";
import Rates from "../Images/Rates.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Inspection from "../Images/Inspection.jpg"

export const Home = () => {
  return (
    <>
      <Carousel fade pause="hover" indicators={false}>
        <Carousel.Item interval={900000}>
          <div
            className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
            style={{
              backgroundImage: `url(${One})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "90vh",
            }}
          >
            <Div>
              <h3>Residential Inspection</h3>
              <p>
                Starting from 300$ we make sure our prices suits our clients
                budget!
              </p>
              <ButtonHero to="/book">Book Appointment</ButtonHero>
            </Div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <div
            className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
            style={{
              backgroundImage: `url(${Two})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "90vh",
            }}
          >
            <h3>Slide Number One</h3>
            <p>I like pizza, do you like pizza?</p>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <div
            className="w-100 d-flex flex-column justify-content-center align-items-center text-white"
            style={{
              backgroundImage: `url(${Three})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "90vh",
            }}
          >
            <h3>Slide Number One</h3>
            <p>I like pizza, do you like pizza?</p>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* item 1 */}
      <CardContainer>
        <Row>
          <Col>
            <Card style={{ width: "20rem", margin: "1rem", textAlign: "center" }}>
              <Card.Img variant="top" src={Contact} />
              <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Text>
                  Any questions about our services, need help with something?
                  We're here to help!
                </Card.Text>
                <Button variant="dark">Contact us</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* item 2 */}
          <Col>
            <Card style={{ width: "20rem", margin: "1rem", textAlign: "center"  }}>
              <Card.Img variant="top" src={Inspection} />
              <Card.Body>
                <Card.Title >
                  Services
                </Card.Title>
                <Card.Text>
                  Thermal Inspection, Mold Inspection, Air Quality, Residential Inspection and more...
                </Card.Text>
                <Button variant="dark">Our services</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* item 3 */}
          <Col>
            <Card style={{ width: "20rem", margin: "1rem", textAlign: "center"  }}>
              <Card.Img variant="top" src={Book} />
              <Card.Body>
                <Card.Title >Book</Card.Title>
                <Card.Text>
                  Do not wait any longer; book a professional inspection today
                  and get your buck worth!
                </Card.Text>
                <Button variant="dark">Book Appointment</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* item 4 */}
          <Col>
            <Card style={{ width: "20rem", margin: "1rem", textAlign: "center" }}>
              <Card.Img variant="top" src={Rates} />
              <Card.Body>
                <Card.Title>Rates</Card.Title>
                <Card.Text>
                  With competitive prices starting at 300$, we ensure that we
                  meet our client's budget.
                </Card.Text>
                <Button variant="dark">Our Rates</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;

`;

const ButtonHero = styled(Link)`
  background-color: none;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  border: 1px solid white;
  padding: 5px;
  transition: 0.3s;
  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const Div = styled.div`
  background-color: #0f0f0fc7;
  width: 320px;
  align-items: center;
  text-align: center;
  padding: 25px;
`;
