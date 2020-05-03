import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function JumboTOC() {
 return (
  <>
   <Jumbotron fluid className="jumbotron_secondary">
    <Container>
     <Row>
      <Col className="my-auto">
       <h3>The Art of Political Finance</h3>
       <h3>Volume I - Part I | The Colonial Era Through Reconstruction</h3>
       <h2 className="textCenter">TABLE OF CONTENTS</h2>
      </Col>
     </Row>
    </Container>
   </Jumbotron>
  </>
 )
}