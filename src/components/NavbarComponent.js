import React ,{useEffect}from 'react';
import {Navbar,  Container, Nav,Button,Form} from 'react-bootstrap';
import {NavLink } from 'react-router-dom'
import { GrHomeRounded } from "react-icons/gr";
import logo from './ibook.gif';
import { useLocation } from 'react-router-dom';

 
  const  NavbarComponent=()=>{
 let location = useLocation()
 useEffect(() => {
  console.log(location.pathname)
  }, [location]);
  

  return (
    <Navbar className="navbar  shadow navbar-expand-lg navbar-dark  bg-dark">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="Logo" />NoteBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          < Nav className="me-auto" variant="underline" defaultActiveKey="/home">
         <Nav.Link  className={`nav-link ${location.pathname==="/"? "active":""}`} as={NavLink} to="/"><GrHomeRounded /> Home</Nav.Link>
            <Nav.Link  className={`nav-link ${location.pathname==="/about"? "active":""}`}eventkey="about" as ={NavLink}to="/about">About</Nav.Link>
            
          </Nav >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="btn btn-outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;