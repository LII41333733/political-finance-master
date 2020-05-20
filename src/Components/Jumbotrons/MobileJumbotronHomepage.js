import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ({ changeRoute }) =>
    <Jumbotron className="jumbo-homepage" fluid>
        <Container>
            <Row>
                <Col
                    className="d-flex justify-content-center">
                    <img
                        className="cover"
                        src="images/book1/front1.jpg"
                        alt="cover"
                        onClick={() => changeRoute({
                            page: "books",
                            action: ""
                        })}
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={4} className="my-5 p-0 d-flex justify-content-center">
                    <Row>
                        <Col>
                            <h1>MORE HISTORY.</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>LESS HYSTERIA.</h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col
                    className="d-flex justify-content-center"
                    lg={4}>
                    <img
                        className="cover"
                        src="images/book2/front1.jpg"
                        alt="cover"
                        onClick={() => changeRoute({
                            page: "books",
                            action: "bookScroll"
                        })}
                    />
                </Col>
            </Row>
            {/* <Row>
                        <Col>
                        </Col>
                    </Row> */}
        </Container >
    </Jumbotron >