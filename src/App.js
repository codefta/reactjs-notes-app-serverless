import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './App.css'
import Routes from './Routes'

function App() {
  return (
    <div className="App container">
      <Navbar bg="light" fluid collapseOnSelect>
        <Navbar.Brand>
          <Link to="/">Scratch</Link>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Link to="/signup" className="mr-2">
              <Nav.Item>Signup</Nav.Item>
            </Link>
            <Link to="/login">
              <Nav.Item>Sign</Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  )
}

export default App
