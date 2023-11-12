import React from 'react';

const YearFilters = ({ setSearchTerm }) => {
    return (
        <div className='filter-options-year'>
                    <button className='badge5' onClick={() => setSearchTerm("2010")}>2010</button>
                    <button className='badge6' onClick={() => setSearchTerm("2011")}>2011</button>
                    <button className='badge7' onClick={() => setSearchTerm("2012")}>2012</button>
                    <button className='badge8' onClick={() => setSearchTerm("2013")}>2013</button>

                    <button className='badge5' onClick={() => setSearchTerm("2014")}>2014</button>
                    <button className='badge6' onClick={() => setSearchTerm("2015")}>2015</button>
                    <button className='badge7' onClick={() => setSearchTerm("2016")}>2016</button>
                    <button className='badge8' onClick={() => setSearchTerm("2017")}>2017</button>

                    <button className='badge5' onClick={() => setSearchTerm("2018")}>2018</button>
                    <button className='badge6' onClick={() => setSearchTerm("2019")}>2019</button>
                    <button className='badge7' onClick={() => setSearchTerm("2020")}>2020</button>
                    <button className='badge8' onClick={() => setSearchTerm("2021")}>2021</button>

                    <button className='badge5' onClick={() => setSearchTerm("2022")}>2022</button>
                    <button className='badge6' onClick={() => setSearchTerm("2023")}>2023</button>
                </div>
    )
}

export default YearFilters;