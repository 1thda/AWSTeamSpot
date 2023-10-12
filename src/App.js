import React from 'react';
import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listPastIssuesStorages } from "./queries";
//getPastIssuesStorage


import ArticleCard from './ArticleCard';
import NavBar from './NavBar';

import './App.css';
import SearchIcon from './search.svg';


const App = () => {


    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect( () => {
        fetchArticles()
    },[])

   // List all items
   const fetchArticles = async () => {
        try { const allPastIssuesStorages = await API.graphql(graphqlOperation(listPastIssuesStorages));
            console.log(allPastIssuesStorages);
            setArticles(allPastIssuesStorages.data.listPastIssuesStorages)
        } catch (error){}
    }   

    //const searchArticles = (e) => {
        //e.preventDefault()

        //console.log(searchTerm)
    //}


    return (

            <div className="app">

                <NavBar />
                <div className='searchdiv'>
                    <div className="search">
                        <input 
                            placeholder="Search for past issues"
                            value = {searchTerm}
                            onChange={(e) => {setSearchTerm(e.target.value)}}
                            
                        />
                        <img 
                            src={SearchIcon}
                            alt="search"
                            //onClick={() => axiosFetchData(searchTerm)}
                        />
                    </div>
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