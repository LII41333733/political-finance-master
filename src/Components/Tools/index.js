import React, { useState, useEffect } from "react";

import BloomsWheel from "../BloomsWheel";
import Modal from "react-bootstrap/Modal";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RenderCards from "../Utilities/RenderCards";

export const RenderTimelines = ({ setTool }) => {
    const [isCardMode, setCardMode] = useState(true);
    const [index, setCardIndex] = useState(-1);

    const timelines = [{
        src: "images/tools/timelines/timeline-civilWar.jpg",
        alt: "timeline-civilWar",
        title: "Significant Financial Legislation of the Civil War",
        caption: "Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum."
    },
    {
        src: "images/tools/timelines/timeline-reconstruction.jpg",
        alt: "timeline-reconstruction",
        title: "Significant Financial Legislation of Reconstruction",
        caption: "Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum."
    },
    {
        src: "images/tools/timelines/timeline-panicTo1900.jpg",
        alt: "timeline-panicTo1900",
        title: "Significant Financial Panics to 1900",
        caption: "Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum."
    },
    {
        src: "images/tools/timelines/timeline-thirdPartySystem.jpg",
        alt: "timeline-thirdPartySystem",
        title: "The Third Party System c.1856-1896",
        caption: "Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum."
    }];

    return (
        <>
            <div
                className="backBtnCircle cursor"
                onClick={() => {
                    !isCardMode
                        ? setCardMode(true)
                        : setTool("")
                }}>
                <span className="backArrow">↩</span>
            </div>
            <Row>
                <Col>
                    <h2 className="textColorPrimary toolsTitle mt-3">TIMELINES</h2>
                    {isCardMode
                        ? <RenderCards
                            arr={timelines}
                            onClick={(e) => {
                                setCardIndex(e)
                                setCardMode(false);
                            }}
                            noCaption={true}
                        />
                        : index > -1
                            ? <img
                                className="w-90 my-3 timeline"
                                src={timelines[index].src}
                                alt={timelines[index].alt}
                            />
                            : null}

                </Col>
            </Row>
        </>
    )
}

export const RenderGlossary = ({ setTool }) => {
    const Gallery = () => {
        const arr = [];
        for (let i = 1; i <= 8; i++) {
            arr.push(
                <img
                    className="galleryImage"
                    src={`images/tools/glossary/glossary-${i}.jpg`}
                    alt="Gallery" />
            )
        }
        return arr;
    }

    return (
        <>
            <div
                className="backBtnCircle cursor"
                onClick={() => {
                    setTool("")
                }}>
                <span className="backArrow">↩</span>
            </div>
            <Row>
                <Col>
                    <h2 className="textColorPrimary toolsTitle mt-3">GLOSSARY</h2>
                    <Gallery />
                </Col>
            </Row>
        </>
    )
}

export const RenderTAM = ({ setTool }) => {
    return (
        <>
            <div
                className="backBtnCircle cursor"
                onClick={() => {
                    setTool("")
                }}>
                <span className="backArrow">↩</span>
            </div>
            <Row>
                <Col>
                    <h2 className="textColorPrimary toolsTitle mt-3 mb-4">TRANSACTIONAL MODEL FOR EFFECTIVE COMMUNICATION AND LEARNING</h2>
                    <img
                        className="tamImg"
                        src={`images/tools/tam/TA.jpg`}
                        alt="TAM Image" />
                    <div className="textLeft mt-3 px-5">Transactional Analysis can be studied in-depth, but for purposes here it’s a model to remind us of effective communications and transactions. Effective teaching, if possible, should be done via the “Adult to Adult” channel. </div>
                </Col>
            </Row>
        </>
    )
}

export const RenderBlooms = ({ setTool }) => {
    return (
        <>
            <div
                className="backBtnCircle cursor"
                onClick={() => {
                    setTool("")
                }}>
                <span className="backArrow">↩</span>
            </div>
            <Row>
                <Col>
                    <h2 className="textColorPrimary toolsTitle mt-3">BLOOM'S TAXONOMY WHEEL</h2>
                    <h2 className="textColorPrimary toolsTitle mt-1">Click to stop!</h2>
                    <BloomsWheel />
                </Col>
            </Row>
        </>
    )
}

export const RenderAdvisor = ({ setTool }) => {
    const [whichIndex, toggleIndex] = useState(-1);
    const showModal = whichIndex > -1;

    let module;
    switch (whichIndex) {
        case 0:
            module = (
                <>
                    <p>Avoid high management fees, especially for index and mutual funds that do not require a great deal of
                    management, if any. If your portfolio is laden with these funds you may want to consider a company who is
                    known for low expense ratios. See an example of a fund and its returns based upon a $100,000 initial
investment and different fee expenses:</p>
                    <img className="w-100" src="images/tools/advisor/3.png" />
                </>
            )
            break;
        case 1:
            module = <p>Fund Managers like to sell clients high fee mutual funds. These mutual funds are made up of individual stocks.
            You may be told that these mutual funds help to diversify your portfolio and avoid the “eggs all in one basket”
            scenario. This can be misleading. As an example, I had approximately 10 or more mutual funds in my portfolio
            managed by one of the leading houses in the Country. I am tempted to reveal their name, but I won’t since it
            may not have been the Franchisor’s fault. When I performed a “cross section” of the mutual funds I found that I
            owned companies like Comcast, JP Morgan, Microsoft, AT&amp;T, and others several times over. This is not to say
            that those companies do not perform well but you may want to see how diversified you really are with a cross
section. If you’re willing to take on more risk these stocks may not avail those opportunities.</p>
            break;
        case 2:
            module = <div>{whichIndex}</div>
            break;
        case 3:
            module = (
                <>
                    <p>I recently read an article that said, “Americans are still bad at investing.” No wonder. Most of us would like to lead “normal” lives without being pinned to the ticker. We would also like to rely on the trust of our fellow Americans called “professionals” to manage our portfolio in our best interest. Unfortunately, this is not always the case, as we Lilliputians have found out in the last few decades. Which brings us back to decision point number one: is your professional acting as a fiduciary? If not, be wary.</p>
                    <p>Managers and firms love to show off their charting skills. This is ok as long as they show you the whole picture. As an example, let’s say you had $100,000 in an IRA and you wanted to assess its performance over the last year or so. Your broker may provide a graph like the following: </p>
                    <img className="w-100" src="images/tools/advisor/1.png" />
                    <p>Growth looks good right? But  maybe there’s more to the story. Here’s the data behind the graph:</p>
                    <img className="w-75 mx-auto d-block" src="images/tools/advisor/1a.png" />
                    <p className="mt-3">As you can see from the totals, the income returns from reinvested dividends made up 81% of the growth realized during this period of a poor 2.7% overall return shown in the ending balance. The bottom line is, force your professional to break out and show you the components of your returns; market vs. reinvestments. In periods of slow growth or downturns the market can wipe out the income. A good advisor may provide options to avoid this scenario.</p>

                </>
            );
            break;
    }
    return (
        <>
            <div
                className="backBtnCircle cursor"
                onClick={() => {
                    setTool("")
                }}>
                <span className="backArrow">↩</span>
            </div>
            <h2 className="textColorPrimary toolsTitle mt-3">FINANCIAL ADVISOR</h2>
            <h3 className="textColorPrimary toolsTitle mt-1">Click on the red boxes for more information.</h3>
            <div className="faChartDiv mx-auto">
                <div className="imgDivFA">
                    <img
                        className={"w-100"}
                        src="images/tools/advisor/financialAdvisorChart.png" />
                </div>
                <div onClick={() => toggleIndex(0)} className="chartLink chartLink0 cursor"></div>
                <div onClick={() => toggleIndex(1)} className="chartLink chartLink1 cursor"></div>
                {/* <div onClick={() => toggleIndex(2)} className="chartLink chartLink2 cursor"></div> */}
                <div onClick={() => toggleIndex(3)} className="chartLink chartLink3 cursor"></div>
            </div>
            <Modal
                show={showModal}
                onHide={() => toggleIndex(-1)}
                size={"lg"}
                centered>
                <Modal.Body>
                    {module}
                    {/* <img className="w-100" src={`images/book${whichBook}/${whichIndex}.jpg`} /> */}
                </Modal.Body>
            </Modal>
        </>
    )
}