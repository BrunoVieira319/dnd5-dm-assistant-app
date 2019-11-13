import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import Link from "./components/ResetLink"
import Characters from "./components/Characters"
import CharacterForm from "./components/CharacterForm";
import CharacterNotes from "./components/CharacterNotes";

function App() {
    return (
        <Router>
            <Navbar className="Navbar">
                <Nav>
                    <Link to="/characters">
                        <Nav.Item>
                            Characters
                        </Nav.Item>
                    </Link>
                    <Link to="/character/new">
                        <Nav.Item>
                            Create new character
                        </Nav.Item>
                    </Link>
                </Nav>
            </Navbar>

            <Route path="/character/:id/notes" exact component={CharacterNotes}/>
            <Route path="/characters" component={Characters}/>
            <Route path="/character/new" component={CharacterForm}/>
        </Router>
    );
}

export default App;
