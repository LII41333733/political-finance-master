import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

//275 x 170

export default function ({ arr, hasButton, onClick }) {
    return arr.map((e, i) => {
        const { src, title, altText, file, price, caption, tag } = e;
        return (
            <>
                <Card
                    onClick={onClick ? () => onClick(tag || i) : ""}
                    key={i}
                    data-index={i}
                    border={"dark"}
                    className={`toolCard p-0 d-inline-block m-3 ${onClick ? "cursor hoverZoom" : ""}`}>
                    {!onClick &&
                        <OverlayTrigger
                            key={"top"}
                            placement={"top"}
                            overlay={
                                <Tooltip id={`tooltip-${"top"}`}>
                                    Lesson plans are packaged in a <strong>{".zip"}</strong> file as they contain several files that are pertinent to the lesson plan. <br />After downloading the file you will look to <strong>{"extract"}</strong><br /> the files in order to <br />access the content. <br /> You can expect the extracted files to be in either <strong>.pdf, .doc or .xls</strong>.
                                </Tooltip>
                            }>
                            <div class="infoBtnCircle cursor"><div class="infoIcon">i</div></div>
                        </OverlayTrigger>}
                    <Card.Img
                        variant="top"
                        src={src} />
                    <Card.Body className="p-0 my-auto">
                        <Card.Header
                            className="align-items-center justify-content-center d-flex">
                            <div className="headerTitleDiv">
                                <h5 className="m-0 preWrap">{title}</h5>
                            </div>
                        </Card.Header>
                        <Card.Text
                            className="align-items-center text-left d-flex textSize-4 pt-2 pb-1 px-4 mb-3">{caption}</Card.Text>
                        {hasButton &&
                            <Button
                                className="lessonButton mb-3"
                                href={file}
                                size="sm"
                                download={title}
                                variant="dark">
                                {price === "0" ? "Free" : `$${price}`}
                            </Button>}
                    </Card.Body>
                </Card>
            </>
        )
    });
}