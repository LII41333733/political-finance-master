import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

//275 x 170

export default ({ arr, hasButton, onClick, onButtonClick, noCaption }) =>
    arr.map((e, i) => {
        const { src, title, altText, file, price, caption, tag, href } = e;
        return (
            <div className="d-inline-block" key={i}>
                {
                    noCaption
                        ? (<Card
                            onClick={onClick ? () => onClick(tag || i) : null}
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
                                    <div className="infoBtnCircle cursor"><div className="infoIcon">i</div></div>
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
                            </Card.Body>
                        </Card>)
                        : <Card
                            onClick={onClick ? () => onClick(tag || i) : null}
                            data-index={i}
                            border={"dark"}
                            className={`toolCard p-0 d-inline-block m-3 ${onClick ? "cursor hoverZoom toolCardLong" : ""}`}>
                            {!onClick &&
                                <OverlayTrigger
                                    key={"top"}
                                    placement={"top"}
                                    overlay={
                                        <Tooltip id={`tooltip-${"top"}`}>
                                            Lesson plans are packaged in a <strong>{".zip"}</strong> file as they contain several files that are pertinent to the lesson plan. <br />After downloading the file you will look to <strong>{"extract"}</strong><br /> the files in order to <br />access the content. <br /> You can expect the extracted files to be in either <strong>.pdf, .doc or .xls</strong>.
                                </Tooltip>
                                    }>
                                    <div className="infoBtnCircle cursor"><div className="infoIcon">i</div></div>
                                </OverlayTrigger>}
                            <Card.Img
                                variant="top"
                                src={src} />
                            <Card.Body className="p-0 my-auto">
                                <Card.Header
                                    className="align-items-center justify-content-center d-flex mb-2">
                                    <div className="headerTitleDiv">
                                        <h5 className="m-0 preWrap">{title}</h5>
                                    </div>
                                </Card.Header>
                                <Card.Text
                                    className="align-items-center text-left d-flex textSize-4 px-4 mb-3">{caption}</Card.Text>
                                {hasButton &&
                                    price === "0" &&
                                    <Button
                                        index={i}
                                        className="lessonButton mb-4"
                                        size="sm"
                                        href={file}
                                        download={title}
                                        variant="dark">
                                        {"Free Download"}
                                    </Button>}
                                {hasButton &&
                                    price !== "0" &&
                                    <Button
                                        onClick={() => {
                                            e.index = i + 1;
                                            onButtonClick(({
                                                page: "checkout",
                                                action: e
                                            }))
                                        }}
                                        className="lessonButton mb-4"
                                        size="sm"
                                        variant="dark">
                                        {`$${price}`}
                                    </Button>}
                            </Card.Body>
                        </Card>

                }
            </div >
        )
    });



// on load, check localStorage for previously bought items
    // yes => set in state and unlock buttons
    // no => nothing

// click button to buy ===> modal
    // check state
        // if existing user
            // proceed to checkout
        // else new customer
            // email field
            // token field
            // matched token field

            // have user click "Accept" on message not to clear local storage and will be loaded upon return automatically. Contact me for support

            // onSubmit:
            // validate
                    // on pass
                        // save local storage && state
                            // index array
                            // email
                            // password
                        // continue to paypal checkout
                    // on fail
                        // try again








