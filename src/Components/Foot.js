import React, { useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Foot({ changeRoute }) {
    const [email, changeEmail] = useState("");
    return (
        <>
            <Jumbotron fluid className="footer">
                <Row className="row h-100">
                    <Col
                        className="my-auto"
                        lg={12}>
                        <Row
                            className="">
                            <Col className="d-flex justify-content-between footerNav">
                                <h5
                                    className="cursor"
                                    onClick={() => changeRoute({
                                        page: "home",
                                        action: ""
                                    })}>Home</h5>
                                <h5
                                    className="cursor"
                                    onClick={() => changeRoute({
                                        page: "books",
                                        action: ""
                                    })}>Books</h5>
                                <h5
                                    className="cursor"
                                    onClick={() => changeRoute({
                                        page: "lessons",
                                        action: ""
                                    })}>Lesson Plans</h5>
                                <h5
                                    className="cursor"
                                    onClick={() => changeRoute({
                                        page: "tools",
                                        action: ""
                                    })}>Tools</h5>
                                <h5
                                    className="cursor"
                                    onClick={() => changeRoute({
                                        page: "blogs",
                                        action: ""
                                    })}>Articles</h5>
                                <h5
                                    className="cursor"
                                    onClick={() => changeRoute({
                                        page: "iaq",
                                        action: ""
                                    })}>IAQs</h5>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col className="d-flex justify-content-between">
                                <h5 className="footer-sub">Terms & Conditions</h5>
                                <h5 className="footer-sub">Privacy Policy</h5>
                                <h5 className="footer-sub">Terms of Use</h5>
                                <h5 className="footer-sub">Copyright &copy;2020</h5>
                            </Col>
                        </Row> */}
                    </Col>

                    {/* <Col
                        lg={5}
                        className="my-auto col-lg-5 p-0 pl-5">
                        <h5>Subscribe to my newsletter</h5>
                        <input onChange={(e) => changeEmail(e.target.value)} name="subscribeEmail" placeholder="example@myemail.com" value={email} /><i className="fa far fa-check-square"></i>
                    </Col> */}
                </Row>
            </Jumbotron>
        </>
    )
}


