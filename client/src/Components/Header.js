import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styled from "styled-components";
import { Link } from "react-router-dom"


import Yo from "../Images/yo.svg"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { AiOutlineAlignRight} from "react-icons/ai"
import "../Components/Header.css"

export const Header = () => {
  return (
    <>
      <Navbar expand="sm" bg="dark" variant="dark" collapseOnSelect as="nav" >
        <Container fluid>
          <Navbar.Brand href="#">REDKAPINSPECTION</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" ></Navbar.Toggle>


          <Navbar.Offcanvas placement="end" style={{background: "#212529"}}>


            <Offcanvas.Header closeButton closeVariant="white">
                <Title to='/' style={{color: "white", backgroundImage: `url(${Yo})`, width: "100px", height: "40px", backgroundRepeat: "no-repeat"}} />
            </Offcanvas.Header>


              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3 text-white align-items-center">
                  <NavLinks to="/">Home</NavLinks>
                  <NavLinks to="/contact">Contact</NavLinks>
                  <NavLinks to="/services">Services</NavLinks>
                  <NavLinks to="/book">Book Appointment</NavLinks>
                </Nav>
              </Offcanvas.Body>
          </Navbar.Offcanvas>
          
        </Container>
      </Navbar>
    </>
  );
};

const Icon = styled(AiOutlineAlignRight)`
border: none !important;
color: red;
`;


const NavLinks = styled(Link)`
display: flex;
text-decoration: none;
color: lightgrey;
padding: 10px;
&:hover {
  color: white;
}
`;

const Title = styled(Link)`
  color: green;
`;
