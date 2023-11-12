import React from 'react';
import { useState, useEffect } from 'react';

import ArticleCards from './ArticleCards';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SeasonFilters from './SeasonFilters';
import YearFilters from './YearFilters';

import './App.css';

import { listPreviousIssueArchives } from "./graphql/queries";

import { API } from 'aws-amplify';



const App = () => {


    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [openSeason, setOpenSeason] = React.useState(false);
    const [openYear, setOpenYear] = React.useState(false);

    useEffect( () => {
        fetchArticles()
    },[])

   // List all items
   const fetchArticles = async () => {
    try {const allPreviousIssueArchives = await API.graphql({
        query: listPreviousIssueArchives,
        authMode: "API_KEY"
    });
    console.log(allPreviousIssueArchives);
    setArticles(allPreviousIssueArchives.data.listPreviousIssueArchives.items)
    } catch (error){console.log(error)}}

    const handleSeason = () => {
        setOpenSeason(!openSeason);
    }

    const handleYear = () => {
        setOpenYear(!openYear);
    }

    return (

            <div className="app">

                <NavBar />

                <div className='empty3'></div>

                <div className='filtering'>
                
                    <div className='filter-options'>
                        <button className='button1'onClick={ handleSeason }>Season</button>
                        
                        <div className='empty2'></div>

                        <button className='button1' onClick={ handleYear }>Year</button>
                    </div> 

                
                    <div className='empty2'></div>
                    <SearchBar  searchTerm={searchTerm} setSearchTerm={ setSearchTerm }/>
            
                </div>

                {openSeason ? (
                        <div>
                        <SeasonFilters setSearchTerm={setSearchTerm} />
                        </div>
                    ) : null}

                {openYear ? (
                        <YearFilters setSearchTerm={setSearchTerm} />
                    ) : null}

                <div className='clearfilters' onClick={() => setSearchTerm("")} disabled={!searchTerm}><button className='button2'>Clear Filters</button></div>
                

                
                {articles?.length > 0
                ?(
                <div className="container">
                {articles.filter((article)=> {
                    if (searchTerm === "") {
                        return article 
                    } 
                    else if ((article.Title.toLowerCase().includes(searchTerm.toLowerCase())) ||  (article.Season.includes(searchTerm)) || (article.Year.includes(searchTerm))){
                        return article
                    }
                    else {
                        return null
                    }}).map((allArticles) => (
                            <ArticleCards article={allArticles}/>
                    ))
                }
                </div>
                ) : (
                    <div className="empty">
                        <h2>No articles found</h2>
                    </div>
                )}  

                
                <div className="empty"></div>
                
            
            </div>
    );
}

export default App;