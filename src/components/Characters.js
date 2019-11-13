import React from "react"
import "../style/Characters.css"
import {Button, Card, Col, Container, FormControl, InputGroup, ProgressBar, Row} from "react-bootstrap";
import {CharactersProvider, CharactersContext} from "../contexts/CharactersContext";
import {FaUserCog, FaMedrt} from "react-icons/fa";

const CharacterCard = props => {
    let c = props.character;
    return (
        <Card>
            <Card.Img src={c.image} className="CharacterImg"/>
            <Card.Body>
                <Row>
                    <Col sm="9" className="ColData">
                        <Card.Title>{c.character_name}</Card.Title>
                        <Card.Subtitle>{c.race}{' '}{c.character_class}{' '}{c.level}</Card.Subtitle>
                        <Card.Text>{`HP : ${c.current_hp} / ${c.max_hp}`}</Card.Text>
                    </Col>
                    <Col sm="3" className="ColButtons">
                        <Button size="sm"
                                title="Edit Character"
                                variant="secondary">
                            <FaUserCog/>
                        </Button>
                        <Button size="sm"
                                title="Rest"
                                variant="success">
                            <FaMedrt/>
                        </Button>
                    </Col>
                </Row>

                <ProgressBar now={c.current_hp * 100 / c.max_hp}/>
                <InputGroup size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Change HP</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={props.hpControl}
                        onChange={props.handleHp}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                props.changeHp(c.id)
                            }
                        }}
                    />
                </InputGroup>
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
                                <Col sm={3} key={i}>
                                    <CharacterCard
                                        character={character}
                                        hpControl={ctx.hp}
                                        handleHp={ctx.handleHp}
                                        changeHp={ctx.changeHp}
                                    />
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