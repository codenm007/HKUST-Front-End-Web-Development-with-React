import React from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';


function App() {
  return (
    <div className="App">
   
   <Navbar dark color="success">
          <div className="container">
            <NavbarBrand href="/" className = "font-italic">Coding Geeks</NavbarBrand>
          </div>
        </Navbar>
         <Menu />
    </div>
  );
}

export default App;
