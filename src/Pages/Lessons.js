import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import JumboLessons from "../Components/Jumbotrons/JumboLessons";
import RenderCards from "../Components/Utilities/RenderCards";

// header 615x250
export const lessons = [{
    title: "Money, Taxation, and Precursors to Revolution",
    price: "0",
    file: "images/lessons/1/Money, Taxation, and Precursors to Revolution.zip",
    caption: "",
    src: "images/lessons/1/thumb.png",
    altText: ""
},
{
    title: "The “Berth” of Public Debt",
    price: "3.40",
    file: "images/lessons/2/Debt.zip",
    src: "images/lessons/2/thumb.png",
    altText: "",
    caption: ""
},
{
    title: "The Bank of North America",
    price: "3.40",
    file: "images/lessons/3/Bank of North America.pdf",
    src: "images/placeholders/lessons/2.jpg",
    altText: "",
    caption: ""
},
{
    title: "The First Bank of the \n United States",
    price: "3.40",
    file: "images/lessons/4/Hamilton vs Jefferson - The First Bank of the United States.pdf",
    src: "images/lessons/4/thumb.png",
    altText: "",
    caption: ""
},
{
    title: "The Panic of 1819",
    price: "3.40",
    file: "images/lessons/5/Panic of 1819.zip",
    src: "images/lessons/5/thumb.jpg",
    altText: "",
    caption: ""
},
{
    title: "Biddle vs Jackson The 2nd Bank of the United States",
    price: "3.40",
    file: "images/lessons/6/BiddlevsJackson.pdf",
    src: "images/lessons/6/thumb.png",
    altText: "",
    caption: ""
},
{
    title: "The Panic of 1837",
    price: "3.40",
    file: "images/lessons/7/7 Panic of 1837.pdf",
    src: "images/lessons/7/thumb.png",
    altText: "",
    caption: ""
}
];

export default () => {
    return (
        <div>
            <JumboLessons />
            <Container
                className="container-body"
                style={{ marginBottom: "50px" }}>
                <Row
                    className="d=flex justify-content-center">
                    <RenderCards
                        hasButton={true}
                        arr={lessons}
                    />
                </Row>
            </Container>
        </div >
    )
}

