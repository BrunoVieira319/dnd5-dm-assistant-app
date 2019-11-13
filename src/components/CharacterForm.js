import React from 'react'
import {CharacterFormProvider, CharacterFormContext} from "../contexts/CharacterFormContext";
import {Button, Container, Jumbotron, Form, Col} from "react-bootstrap";
import {Redirect} from "react-router-dom";

const CharacterForm = () => (
    <CharacterFormProvider>
        <CharacterFormContext.Consumer>
            {ctx =>
                ctx.redirect ? <Redirect to="/characters" /> :
                <Container>
                    <Jumbotron>
                        <h2> New Character</h2>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"
                                                  value={ctx.name}
                                                  onChange={ctx.handleName}/>
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                    <Form.Label>Level</Form.Label>
                                    <Form.Control type="number"
                                                  value={ctx.level}
                                                  onChange={ctx.handleLevel}/>
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                    <Form.Label>Hit Points</Form.Label>
                                    <Form.Control type="number"
                                                  value={ctx.hitPoints}
                                                  onChange={ctx.handleHitPoints}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Race</Form.Label>
                                    <Form.Control type="text"
                                                  value={ctx.race}
                                                  onChange={ctx.handleRace}/>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Class</Form.Label>
                                    <Form.Control type="text"
                                                  value={ctx.characterClass}
                                                  onChange={ctx.handleCharacterClass}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text"
                                              value={ctx.image}
                                              onChange={ctx.handleImage}/>
                            </Form.Group>

                            <Button variant="primary"
                                    onClick={ctx.saveCharacter}>
                                Create
                            </Button>
                        </Form>
                    </Jumbotron>
                </Container>
            }
        </CharacterFormContext.Consumer>
    </CharacterFormProvider>
);

export default CharacterForm;