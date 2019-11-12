import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import Link from "./components/ResetLink"
import Characters from "./components/Characters"

function App() {
    return (
        <Router>
            <Navbar className="Navbar" bg="info">
                <Nav>
                    <Nav.Item>
                        <Link to="/characters">Characters</Link>
                    </Nav.Item>
                </Nav>
            </Navbar>

            <Route path="/characters" component={Characters}/>
        </Router>
    );
}

export default App;
