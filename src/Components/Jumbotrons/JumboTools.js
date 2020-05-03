import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function JumboTools() {
    return (
        <>
            <Jumbotron fluid className="jumbotron_tertiary">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="textCenter">TOOLS</h2>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </>
    )
}