import React from "react";

import { useSelector } from "react-redux";
import { selectTheme } from "../features/colorChange/colorChangeSlice";

function Article(props) {
    const theme = useSelector(selectTheme);

    return (
        <article>
            <a href={'https://reddit.com' + props.article.permalink } target='_blank'>
                <img src={props.article.thumbnail} />
                <h3>{props.article.title}</h3>
                <h6>Posted by: {props.article.author}</h6>
                <p>{props.article.ups} upvotes</p>
                <p>{props.article.num_comments} comments</p>
            </a>

        </article>
    )
}

export default Article;