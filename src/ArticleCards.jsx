import React from 'react';
//import page from './Screen Shot 2023-08-22 at 10.30.43 am.png'

const ArticleCards = ({article}) => {
    return (
        <a className="articlecards" href={article.PageLink}>
            <div>
                <p>{article.Year}</p>
            </div>

            <div>
                <img src={article.CoverLink} alt='page'/>

            </div>

            <div>
                <span>{article.Season}</span>
                <h3>{article.Title}</h3>
            </div>
        </a>
    )
}

export default ArticleCards;