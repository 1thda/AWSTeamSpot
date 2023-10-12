import React from 'react';
import page from './Screen Shot 2023-08-22 at 10.30.43 am.png'

const TestArticle = ({article}) => {
    return (
        <div className="articlecard">
            <div>
                <p>{article.Year}</p>
            </div>

            <div>
                <img src={page} alt='page'/>

            </div>

            <div>
                <span>{article.Season}</span>
                <h3>{article.idFlemington_Kensington_Newspaper}</h3>
            </div>
        </div>
    )
}

export default TestArticle;