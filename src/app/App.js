import React from 'react';

import UkuleleChord from './components/ukulele-chord/ukulele-chord';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MusicPedia</Navbar.Brand>
        <Nav className="mr-auto">
          {/*<Nav.Link href="#home">Inicio</Nav.Link>
           <Nav.Link href="#features">Ukulele</Nav.Link>
           <Nav.Link href="#pricing">Guitarra</Nav.Link>*/}
        </Nav>
      </Navbar>
      <UkuleleChord/>
    </>
  );
}

export default App;
