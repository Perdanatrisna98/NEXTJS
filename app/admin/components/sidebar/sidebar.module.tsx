"use client";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Menu from '../menu/menu.module';

function SidebarComponent() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        Toggle Offcanvas
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='start' backdrop={true} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// function SidebarComponent() {
//   return (
//     <>
//         <Sidebar />
//     </>
//   );
// }

export default SidebarComponent;