"use client";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="https://i.pinimg.com/736x/9c/29/0f/9c290f60834e40fb14aa4d7a892b9557.jpg" width="30" height="30" className="d-inline-block align-top" />
            {' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;