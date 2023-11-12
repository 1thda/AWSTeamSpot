import React from 'react';
import icon from './exit.png';
/*Cross icon by "https://icons8.com"*/

const SearchBar = ({ searchTerm, setSearchTerm }) => {


    return (
        <div className="searchbar" >

           <input placeholder='search article titles' value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value) }/>

           <div className="searchimage">

           {searchTerm === "" ? (
            <span></span>
            ) : (
            <img  src={icon} alt="searchicon" onClick={() => setSearchTerm("")}/>
            )}
           </div>
        </div>
    )
}

export default SearchBar;