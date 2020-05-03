import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import JumboIAQ from "../Components/Jumbotrons/JumboIAQ";


export default function IAQ() {
    return (
        <div>
            <JumboIAQ />
            <Container className="container-body" style={{ marginBottom: "50px" }}>
                <Row style={{ justifyContent: "center" }}>
                    <Col style={{ maxWidth: "500px" }}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}