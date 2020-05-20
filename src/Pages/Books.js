import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import JumbotronDefault from '../Components/Jumbotrons/JumbotronDefault'
import { useEffect, useState } from "react";

export default function Books({ action, returnCount }) {
    const book1 = [
        {
            label: "Washington on the Parties c. 1800",
            fileName: "images/book1/gallery/Washington.jpg"
        },
        {
            label: "Independent Treasury 1820",
            fileName: "images/book1/gallery/Independent Treasury.jpg"
        },
        {
            label: "Nullification Crisis of 1832",
            fileName: "images/book1/gallery/Despotism.jpg"
        },
        {
            label: "King Andrew the First 1833",
            fileName: "images/book1/gallery/King Andrew the First.jpg"
        },
        {
            label: "Whig President 1848",
            fileName: "images/book1/gallery/Available Candidate.jpg"
        },
        {
            label: "Free Soil Banner 1848",
            fileName: "images/book1/gallery/Free Soil Banner.jpg"
        },
        {
            label: "Jackson and the Mother Bank 1850",
            fileName: "images/book1/gallery/Jackson Mother Bank.jpg"
        },
        {
            label: "Citizen Know Nothing c. 1854",
            fileName: "images/book1/gallery/Citizen Know Nothing.jpg"
        },
        {
            label: "Panic of 1857",
            fileName: "images/book1/gallery/Panic 1857.jpg"
        },
        {
            label: "National Union Party 1864",
            fileName: "images/book1/gallery/National Union Party.jpg"
        },
        {
            label: "King Andy 1866",
            fileName: "images/book1/gallery/King Andy.jpg"
        },
        {
            label: "Boy of the Period 1869",
            fileName: "images/book1/gallery/Boy of Period.jpg"
        },
        {
            label: "Erie Railroad Ring 1872",
            fileName: "images/book1/gallery/Erie.jpg"
        },
        {
            label: "Liberal Republican Banner 1872",
            fileName: "images/book1/gallery/Liberal Republican Banner.jpg"
        },
        {
            label: "Nassau Street Panic of 1873",
            fileName: "images/book1/gallery/Panic of 1873 Sept 19.jpg"
        },
        {
            label: "I Feed You All 1875",
            fileName: "images/book1/gallery/I Feed You All.jpg"
        },
        {
            label: "Force of Example 1876",
            fileName: "images/book1/gallery/Force of Example.jpg"
        },
        {
            label: "Probe Away 1876",
            fileName: "images/book1/gallery/Probe Away.jpg"
        },
        {
            label: "Stride of a Century 1876",
            fileName: "images/book1/gallery/Centennial.jpg"
        },
        {
            label: "Greenback Party Banner 1876",
            fileName: "images/book1/gallery/Greenback Party.jpg"
        },
        {
            label: "Political Farce of 1876",
            fileName: "images/book1/gallery/Political Farce of 1876.jpg"
        },
        {
            label: "The Great Strike of 1877",
            fileName: "images/book1/gallery/Great Strike.jpg"
        },
        {
            label: "Knights of Labor Picnic 1882",
            fileName: "images/book1/gallery/1st Annual Picnic.jpg"
        },
        {
            label: "Chinese Exclusion Ad 1886",
            fileName: "images/book1/gallery/George Dee China.jpg"
        },
        {
            label: "New Ally 1887",
            fileName: "images/book1/gallery/New Ally.jpg"
        }
    ];

    const book2 = [
        {
            label: "Robert Toombs 1880",
            fileName: "images/book2/gallery/Toombs.jpg"
        },
        {
            label: "Model Office Seeker 1881",
            fileName: "images/book2/gallery/Model Office Seeker.jpg"
        },
        {
            label: "Between Two Evils 1881",
            fileName: "images/book2/gallery/Between Two Evils.jpg"
        },
        {
            label: "In Danger 1881",
            fileName: "images/book2/gallery/What R U Going to do.jpg"
        },
        {
            label: "The Curse of California 1882",
            fileName: "images/book2/gallery/Curse of California.jpg"
        },
        {
            label: "The Protectors of Our Industries 1883",
            fileName: "images/book2/gallery/Protectors.jpg"
        },
        {
            label: "Herbert Spencer 1883",
            fileName: "images/book2/gallery/Spencer.jpg"
        },
        {
            label: "The Panic of 1884",
            fileName: "images/book2/gallery/The Panic of 1884.jpg"
        },
        {
            label: "Let Them Have It All c.1885",
            fileName: "images/book2/gallery/Let Them Have it All.jpg"
        },
        {
            label: "Reverend Beecher 1885",
            fileName: "images/book2/gallery/Beecher.jpg"
        },
        {
            label: "Two Roads for the Working Man c.1885",
            fileName: "images/book2/gallery/Two Roads.jpg"
        },
        {
            label: "Haymarket Flier 1886",
            fileName: "images/book2/gallery/Haymarket Flier.jpg"
        },
        {
            label: "Triumphant Democracy 1889",
            fileName: "images/book2/gallery/Democracy.jpg"
        },
        {
            label: "Party of Patches 1891",
            fileName: "images/book2/gallery/Populist Balloon.jpg"
        },
        {
            label: "The Colombian Exposition 1893",
            fileName: "images/book2/gallery/1893 Exposition.jpg"
        },
        {
            label: "The Situation c.1894",
            fileName: "images/book2/gallery/The Situation.jpg"
        },
        {
            label: "The Pullman Vise 1894",
            fileName: "images/book2/gallery/Pullman Vise.jpg"
        },
        {
            label: "King Debs 1894",
            fileName: "images/book2/gallery/King Debs.jpg"
        },
        {
            label: "Atlas Joe 1896",
            fileName: "images/book2/gallery/Atlas Joe Pulitzer.jpg"
        },
        {
            label: "Cross of Gold 1896",
            fileName: "images/book2/gallery/Cross of Gold.jpg"
        },
        {
            label: "Down Hill Movement 1896",
            fileName: "images/book2/gallery/Down Hill Movement.jpg"
        },
        {
            label: "It Ought to be a Happy New Year 1899",
            fileName: "images/book2/gallery/Happy New Year 1899.jpg"
        },
        {
            label: "A Lesson for Antiexpansionists 1899",
            fileName: "images/book2/gallery/Antiexpansionists.jpg"
        },
        {
            label: "Survival of the Fittest 1900",
            fileName: "images/book2/gallery/Survival of the Fittest.jpg"
        },
        {
            label: "Life and Age of Man c.1900",
            fileName: "images/book2/gallery/Stages of Man.jpg"
        },
    ];

    const [showBookModal, toggleBookModal] = useState(false);
    const [showGalleryModal, toggleGalleryModal] = useState(false);

    const [book, toggleWhichBook] = useState(-1);
    const [imageIndex, toggleWhichIndex] = useState(0);
    const [showMore1, toggleShowMore1] = useState(false);
    const [showMore2, toggleShowMore2] = useState(false);
    const fileName = book === 1 ? book1[imageIndex].fileName : book2[imageIndex].fileName;
    const label = book === 1 ? book1[imageIndex].label : book2[imageIndex].label;

    useEffect(() => {
        if (action === "bookScroll")
            window.scrollTo({
                top: 1550,
                behavior: 'smooth'
            });
    }, [returnCount]);

    const RenderTOCImages = ({ book }) => {
        const images = [];
        const limit = book === 1 ? 4 : 7;
        for (let i = 0; i < limit; i++) {
            images.push(
                <img
                    className={`toc-image${book}`}
                    key={i}
                    src={`images/book${book}/toc/${i}.jpg`}
                    alt={`tocImage`}
                />
            )
        }
        return images;
    }

    const RenderGallery = ({ book, extra }) => {
        const cards = [];
        const low = extra ? 10 : 0;
        const high = extra ? 25 : 10;
        const whichBook = book === 1 ? book1 : book2;

        for (let i = low; i < high; i++) {
            cards.push(
                <Card
                    key={i}
                    id={i}
                    onClick={() => {
                        toggleWhichBook(book);
                        toggleWhichIndex(i);
                        toggleGalleryModal(true);
                    }}
                    className="bg-dark text-white galleryCard cursor mr-2 mt-4">
                    <Card.Img
                        src={whichBook[i].fileName}
                        alt={whichBook[i].label} />
                    <Card.ImgOverlay>
                        <Card.Text
                            className="mx-auto">
                            {whichBook[i].label}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            )
        }
        return cards;
    };

    const ShowMoreGallery = ({ book }) =>
        <RenderGallery
            book={book}
            extra={true} />;

    return (
        <div>
            <JumbotronDefault title={"Books"} />
            <Container className="container-body booksContainer" style={{ marginBottom: "50px" }}>
                <Row style={{ justifyContent: "center" }}>
                    <Col>
                        <h2 className="header-sub">THE ART OF POLITICAL FINANCE</h2>
                        <h2 className="header-sub2">Volume I - Part I</h2>
                        <h2 className="header-main textColorPrimary">THE COLONIAL ERA THROUGH RECONSTRUCTION</h2>
                        <div>
                            <img
                                className="cover-books"
                                src="images/book1/front1.jpg"
                                alt="cover"
                                height="450px"
                                width="310px" />
                            <img
                                className="cover-books"
                                src="images/book1/back.png"
                                alt="cover"
                                height="450px"
                                width="310px" />
                        </div>
                        <Button
                            onClick={() => {
                                toggleBookModal(true)
                                toggleWhichBook(1);
                            }}
                            className="m-3 w-25"
                            variant="outline-dark">
                            Table of Contents</Button>
                        <a
                            target={"_blank"}
                            href="https://store.flpublishers.net/catalog/search?keyword=the+art+of+political+finance">
                            <Button
                                className="m-2 w-25 buyButton inline">Click to Purchase</Button></a>
                    </Col>
                </Row>
                <Row className="px-5">
                    <p
                        className="textBlock"
                        style={{ marginTop: "35px" }}><span className="dropcap">P</span>art I leverages over 60 illustrations by artists and publishers like Frank Leslie and his Illustrated Newspaper, Thomas Nast and Harper’s Weekly, Currier &amp; Ives, Joseph Keppler and Puck Magazine, and others to guide you through this often uninspected history. The images are a tribute to the extremely talented artists and their adroit perception of the issues. The book contains many accompanying summaries which in many cases are just as important as the surrounding text to help us understand the setting.</p>
                </Row>
                <RenderGallery book={1} />
                {showMore1
                    ? < ShowMoreGallery book={1} />
                    : <i
                        onClick={() => toggleShowMore1(true)}
                        className="fas fa-plus-circle d-block mt-2"></i>}
                <hr className="hr0 mt-5" />
                <hr className="hr1" />
                <Row style={{ justifyContent: "center" }}>
                    <Col>
                        <h2 className="header-sub">THE ART OF POLITICAL FINANCE</h2>
                        <h2 className="header-sub2">Volume I - Part II</h2>
                        <h2 className="header-main textColorPrimary">THE GILDED AGE</h2>
                        <div>
                            <img
                                className="cover-books"
                                src="images/book2/front1.jpg"
                                alt="cover"
                                height="450px"
                                width="310px" />
                            <img
                                className="cover-books"
                                src="images/book2/back.jpg"
                                alt="cover"
                                height="450px"
                                width="310px" />
                        </div>
                        <Button
                            onClick={() => {
                                toggleBookModal(true);
                                toggleWhichBook(2);
                            }}
                            className="m-3 w-25"
                            variant="outline-dark">
                            Table of Contents</Button>
                        <a
                            target={"_blank"}
                            href="https://store.flpublishers.net/catalog/search?keyword=the+art+of+political+finance">
                            <Button
                                className="m-2 w-25 buyButton inline">Click to Purchase</Button></a>
                    </Col>
                </Row>
                <Row className="px-5">
                    <p
                        className="textBlock" style={{ marginTop: "35px" }}><span className="dropcap">P</span>art II also looks at over 90 illustrations as political cartooning became more popular and more prevalent. In addition to the artists who were showcased in Part I, several more added to this Gilded Age rendition. Names like William A. Rogers, Bernhard and Victor Gillam, Frederick Opper, Grant Hamilton, Louis Dalrymple, Watson Heston, and others joined the list of artists as magazines like Judge and The Truth Seeker augmented the humor and illustrated publications of the period.</p></Row>
                <RenderGallery
                    book={2} />
                {showMore2
                    ? <ShowMoreGallery book={2} />
                    : <i
                        onClick={() => toggleShowMore2(true)}
                        className="fas fa-plus-circle d-block mt-2"></i>}
            </Container>
            <Modal
                show={showBookModal}
                onHide={() => toggleBookModal(false)}
                size={"lg"}>
                <Modal.Body
                    className={"tocBody"}
                >
                    <RenderTOCImages book={book} />
                </Modal.Body>
            </Modal>
            <Modal
                show={showGalleryModal}
                onHide={() => toggleGalleryModal(false)}
                size={"lg"}
                className={"galleryModal"}>
                <Modal.Body
                    className="mx-auto bgBlack">
                    {book > -1 &&
                        <img className="galleryModalImg" src={fileName} alt={label} />}
                </Modal.Body>
            </Modal>
        </div >
    )
}