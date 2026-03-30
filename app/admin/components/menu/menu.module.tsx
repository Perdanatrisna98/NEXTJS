import Nav from 'react-bootstrap/Nav';

function Menu() {
  return (
    <Nav defaultActiveKey="/admin/dashboard" className="flex-column">
      <Nav.Link href="/admin/dashboard">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default Menu;