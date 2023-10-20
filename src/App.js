import React from 'react';
import { useState, useEffect } from 'react';

import ArticleCard from './ArticleCard';
import NavBar from './NavBar';

import './App.css';

import { listPreviousIssueArchives } from "./graphql/queries";
import { Filters, SearchBar} from './ui-components';

import { API } from 'aws-amplify';



const App = () => {


    const [articles, setArticles] = useState([]);
    //const [searchTerm, setSearchTerm] = useState('');

    useEffect( () => {
        fetchArticles()
    },[])

   // List all items
   const fetchArticles = async () => {
    const allPreviousIssueArchives = await API.graphql({
        query: listPreviousIssueArchives,
        authMode: "API_KEY"
    });
    console.log(allPreviousIssueArchives);
    setArticles(allPreviousIssueArchives.data.listPreviousIssueArchives)
    }

    //const searchArticles = (e) => {
        //e.preventDefault()

        //console.log(searchTerm)
    //}


    return (

            <div className="app">

                <NavBar />

                <div className='empty'></div>

                <div className='search'>
                    <SearchBar />
                </div>

                <div className='empty'></div>

                
                <div className='filters'>
                    <Filters/>
                </div>

                
                {articles?.length > 0
                    ?(
                    <div className="container">
                        {articles.map((allArticles) => (
                            <ArticleCard article={allArticles}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No articles found</h2>
                    </div>
                    )}  
                
                
            </div>
    );
}

export default App;