import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import JumbotronDefault from "../Components/Jumbotrons/JumbotronDefault";
import RenderCards from "../Components/Utilities/RenderCards";
import Modal from 'react-bootstrap/Modal'
import lessonPlans from '../Data/lessonPlans'

export default ({ changeRoute }) => {
    return (
        <div>
            <JumbotronDefault title={"Lesson Plans"} />
            <Container
                className="container-body"
                style={{ marginBottom: "50px" }}>
                <Row
                    className="d=flex justify-content-center">
                    <RenderCards
                        hasButton={true}
                        arr={lessonPlans}
                        onButtonClick={changeRoute} />
                </Row>
            </Container>
        </div>
    )
}