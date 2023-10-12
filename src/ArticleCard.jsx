import React from 'react';
import page from './Screen Shot 2023-08-22 at 10.30.43 am.png'

const ArticleCard = ({article}) => {
    return (
        <a className="articlecard" href={article.IssueLink}>
            <div>
                <p>{article.Year}</p>
            </div>

            <div>
                <img src={page} alt='page'/>

            </div>

            <div>
                <span>{article.Season}</span>
                <h3>{article.id}</h3>
            </div>
        </a>
    )
}

export default ArticleCard;