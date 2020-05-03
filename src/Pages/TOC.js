import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import JumboTOC from "../Components/Jumbotrons/JumboTOC";


export default function TOC() {
    return (
        <div>
            <JumboTOC />
            <Container style={{ marginBottom: "50px" }}>
                <Row style={{ justifyContent: "center" }}>
                    <Col style={{ maxWidth: "500px" }}>
                        <Table
                            responsive
                            size={"sm"}
                            borderless={true}
                        >
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>Dedication</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Acknowledgements</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Contents</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Preface</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Motivation</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Introduction</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Defamation, Vilification, Demonization</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col style={{ maxWidth: "500px" }}>
                        <Table
                            responsive
                            size={"sm"}
                            borderless={true}
                        >
                            <tbody>
                                <tr>
                                    <td>17</td>
                                    <td>Chapter 1 - Colonial Issues</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>Hard Money vs. Soft Money</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>The Currency Act of 1751</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>The Currency Act of 1764</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>Chapter 2 - Revolutionary Finance</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>The Bank of North America</td>
                                </tr>
                                <tr>
                                    <td>21</td>
                                    <td>The Continental</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <hr className="hr0 my-5" />
                <h3 className="mt-4">Download your free lesson <span className="lessonTitle mr-1">Money, Taxation, and Precursors to Revolution</span>.</h3>
                <Button className="mt-3" href="images/pdf0.pdf" size="lg" download="Money, Taxation, and Precursors to Revolution" variant="dark">Download</Button>
            </Container>
        </div>
    )
}