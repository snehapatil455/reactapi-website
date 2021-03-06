import React from 'react';
import About from './about';
import Contact from './contact'
import Users from './users'
import CreateUser from './createuser'
import Home from './home'
import {Link,Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import './App.css';


function App() {
  return (
    <div className="App">
    <Router>

    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/">Home</Link> </Nav.Link>
      <Nav.Link href="#features"><Link to="/about">About us</Link> </Nav.Link>
      <Nav.Link href="#pricing"> <Link to="/contact">Contact us</Link> </Nav.Link>
      <Nav.Link href="#pricing">  <Link to="/list">User list</Link> </Nav.Link>
      <Nav.Link href="#pricing">  <Link to="/create">Create user</Link> </Nav.Link>
    </Nav>
   
  </Navbar>
  
  <Switch>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/list">
    <Users />
  </Route>
  <Route path="/contact">
  <Contact />
</Route>
<Route path="/create">
<CreateUser/>
</Route>
  <Route path="/">
    <Home />
  </Route>
</Switch>
    

    
     </Router>
    </div>
  );
}

export default App;
