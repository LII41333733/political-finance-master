import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import JumbotronDefault from "../Components/Jumbotrons/JumbotronDefault";
import RenderCards from "../Components/Utilities/RenderCards";
import tools from '../Data/tools'

import {
    RenderAdvisor,
    RenderBlooms,
    RenderGlossary,
    RenderTAM,
    RenderTimelines,
} from '../Components/Tools';

export default ({ returnCount }) => {
    const [tool, setTool] = useState("");
    const noTool = tool === "";
    const timelines = tool === "timelines";
    const glossary = tool === "glossary";
    const tam = tool === "tam";
    const blooms = tool === "blooms";
    const advisor = tool === "advisor";

    useEffect(() => {
        setTool("");
    }, [returnCount]);


    return (
        <div>
            <JumbotronDefault title={"Tools"} />
            <Container className="shortDownSpacer container-body">
                {noTool &&
                    <Row
                        className="row d-flex justify-content-center">
                        <RenderCards
                            arr={tools}
                            onClick={setTool}
                        />
                    </Row>}
                {timelines && <RenderTimelines setTool={setTool} />}
                {glossary && <RenderGlossary setTool={setTool} />}
                {tam && <RenderTAM setTool={setTool} />}
                {blooms && <RenderBlooms setTool={setTool} />}
                {advisor && <RenderAdvisor setTool={setTool} />}
            </Container>
        </div>
    )
}