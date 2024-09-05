import React from 'react'
// import Nav from "./NavbarUser";

const Index = () => {
  return (
      <div>
      <h1>Deci Algo</h1>

      <Nav>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default Index
