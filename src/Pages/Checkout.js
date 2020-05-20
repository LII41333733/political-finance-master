import React, { useEffect, useState, useRef } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RenderCheckoutCard from "../Components/checkout/RenderCheckoutCard";
import JumbotronDefault from "../Components/Jumbotrons/JumbotronDefault"
import EmailComponent from "../Components/checkout/EmailComponent"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

export default ({ action }) => {
    console.log(action)
    const item = action;

    const [loaded, setLoaded] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [error, setError] = useState(null);
    const [paypalContinue, setPayPalContinue] = useState(true);
    const paypalRef = useRef();
    const makeNewChildren = () => {
        paypalRef.current.innerHTML = '';
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: "Lesson Plan #2",
                                amount: {
                                    currency_code: 'USD',
                                    value: 3.50,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setShowConfirmation(true);
                    console.log(order);
                },
                onError: err => {
                    setError(err);
                    console.error(err);
                },
            })
            .render(paypalRef.current);
    }

    loaded && paypalRef.current.childNodes.length < 1 && makeNewChildren()

    useEffect(() => {
        const script = document.createElement("script");

        // live
        script.src = `https://www.paypal.com/sdk/js?client-id=AXjc_WlhpGSk4-4cIFxadDfdV1OPzOtLuZKRJ7iaCUSjFEGyzJSj178EztDKesH72lul9D8OxZZQajXo`;

        //sand
        //script.src = `https://www.paypal.com/sdk/js?client-id=AZILohc0HD2gaHUBuQyBd94qxd5D9z4tSjH0BvEAXWqgKxwLAfiT0-dHIAB1DoxWTAN-LIH0YiAFzQyg`;
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
    }, [item.name]);

    const prod = ({ title, index }) => {
        // altText: ""
        // caption: ""
        // file: "images/lessons/2/Debt.zip"
        // price: "3.50"
        // src: "images/lessons/2/thumb.png"
        // title: "The “Berth” of Public Debt"
        return (
            <div className="nav-link-confirm">
                <h2>{`Confirmed!`}</h2><br />
                <h2>{`You just bought`}</h2>
                <h2>{`${title} - Lesson Plan #${action.index}`}</h2><br />
                <h2>Your order details are listed below:</h2>
                <h3>Confirmation number: 687349347</h3>
                <h3>Date: 5/17/2020 4:45pm</h3><br />
                <h2>Click the "Download" button to the right to obtain your contents.</h2>
            </div>
        );
    }

    console.log(action)


    return (
        <>
            <JumbotronDefault title={"Checkout"} />
            <Container className="container-body" style={{ marginBottom: "50px" }}>
                <Row>
                    <Col lg={6} className={"ml-5"}>
                        {showConfirmation
                            ? prod(action)
                            : <>
                                {/* <EmailComponent cb={setPayPalContinue} /> */}
                                <Card
                                    border={"dark"}
                                    className={`p-3 my-3 ml-5 ${!paypalContinue && `paypalOverlay`}`}>
                                    <h3 className="schadow"><strong>Select Payment</strong>  -  Complete your purchase with <br /> either of the below options:</h3>
                                    <Button
                                        variant={"dark"}
                                        size="sm"
                                        className={"mx-auto mb-3 mt-3 checkoutBtnDownload w-80 not-allowed"}
                                        onClick={makeNewChildren}
                                    >
                                        {"Refresh Payment Methods"}
                                    </Button>
                                    <div ref={paypalRef} />
                                </Card>
                            </>
                        }
                    </Col>
                    <Col className={"float-left"} lg={5}>
                        <RenderCheckoutCard
                            showConfirmation={showConfirmation}
                            title={action.title}
                            file={action.file}
                            price={action.price}
                            src={action.src}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}