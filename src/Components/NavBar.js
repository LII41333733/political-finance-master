import Nav from 'react-bootstrap/Nav';
import React from "react";

export default function NavBar({ onSelect, returnCount, setReturnCount }) {
    return (
        <>
            <Nav
                className=""
                activeKey="home"
                onSelect={(route) => { //route comes from 'eventKey'
                    onSelect({
                        page: route,
                        action: "",
                    });
                    const newCount = returnCount + 1;
                    setReturnCount(newCount);
                }}>
                <div className="navPill d-flex justify-content-around">
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey={"home"}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey={"books"}>Books</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey={"lessons"}>Lessons</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey={"tools"}>Tools</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey={"articles"}>Articles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey={"iaq"}>IAQs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey={"about"}>About</Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        </>
    )
}