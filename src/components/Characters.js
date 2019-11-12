import React from "react"
import {Card, Col, Container, Row} from "react-bootstrap";
import {CharactersProvider, CharactersContext} from "../contexts/CharactersContext";

const CharacterCard = props => {
    let c = props.character;
    return (
        <Card>
            <Card.Img src={c.image}/>
            <Card.Body>
                <Card.Title>{c.character_name}</Card.Title>
                <Card.Subtitle>{c.race}{' '}{c.character_class}{' '}{c.level}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
};

const Characters = () => (
    <CharactersProvider>
        <CharactersContext.Consumer>
            {ctx =>
                <Container>
                    <Row>
                        {
                            ctx.characters.map((character, i) =>
                                <Col sm={4} key={i}>
                                    <CharacterCard character={character}/>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            }
        </CharactersContext.Consumer>
    </CharactersProvider>
);

export default Characters;