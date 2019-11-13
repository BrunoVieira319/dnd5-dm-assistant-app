import React from "react";
import {Alert, Col, Container} from "react-bootstrap";
import {CharacterNotesContext, CharacterNotesProvider} from "../contexts/CharacterNotesContext";
import {FaPlusCircle} from "react-icons/fa";

const CharacterNotes = () => (
    <CharacterNotesProvider>
        <CharacterNotesContext.Consumer>
            {ctx =>
                <Container>
                    <Col sm="8">
                        <Alert variant="success"
                               style={{textAlign: 'center', cursor: 'pointer'}}
                               >
                            Add Skill <FaPlusCircle/>
                        </Alert>
                    </Col>
                </Container>
            }
        </CharacterNotesContext.Consumer>
    </CharacterNotesProvider>
);

export default CharacterNotes;