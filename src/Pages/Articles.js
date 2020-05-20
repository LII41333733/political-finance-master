import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useState } from "react"
import JumbotronDefault from "../Components/Jumbotrons/JumbotronDefault"
import { scrollToTop } from "../Components/Utilities/Functions/scrollToTop"
import articles from "../Data/articles"

//525x150
export default function Articles() {
    const [articleIndex, setArticleIndex] = useState(3);
    const isArticleSelected = articleIndex > -1;

    const RenderArticles = ({ articles }) => {
        return articles.map((a, i) => {
            const { thumbSrc, title, date } = a;
            return <div
                onClick={() => setArticleIndex(i)}
                key={i}
                className="articleCard hoverZoom cursor m-2"
                style={{
                    backgroundImage: `url(${thumbSrc})`,
                    backgroundSize: `cover`
                }}>
                <div className={"mb-2 px-2 articleCardInfo"}>
                    <div className="articleCardItem articleCardDetails">{`Bill Pacello ● ${date}`}</div>
                    <div className="articleCardItem articleCardTitle">{title}</div>
                </div>
            </div>

        })
    }

    const DisplayArticle = ({ articles, articleIndex }) => {
        const article = articles[articleIndex];
        const { title, date, body, footer } = article;
        return (
            <div className="slimContain articlesContainer">
                <h2 className="textColorPrimary toolsTitle textCenter">{title.toUpperCase()}</h2>
                <div style={{ height: "50px" }}>
                    <p className={"d-inline mr-2 float-right"}>Bill Pacello</p><p className={"d-inline mr-5 float-right"}>{date}</p>
                </div>
                <div>
                    <img
                        className={"articleImg"}
                        src={article.src} />
                    {body}
                    {footer && <div className={"footerDash mt-5 mb-1"}></div>}
                    {footer}
                </div>
            </div>
        )
    }

    return (
        <div>
            <JumbotronDefault title={"Articles"} />
            <Container className={`container-body textLeft mb-5`}>
                <Row style={{ justifyContent: "center" }}>
                    <RenderArticles
                        articles={articles} />
                </Row>
                <hr className="hr0" />
                <hr className="hr1" />
                <div
                    className="upBtnCircle cursor"
                    onClick={scrollToTop}>
                    <span className="upArrow">↑</span>
                </div>
                <Row>
                    {isArticleSelected &&
                        <DisplayArticle
                            articles={articles}
                            articleIndex={articleIndex} />}
                </Row>
            </Container>
        </div>
    )
}