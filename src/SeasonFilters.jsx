import React from 'react';

const SeasonFilters = ({ setSearchTerm }) => {

    return (
        <div className='filter-options-season'>
                    <button className='badge1' onClick={() => setSearchTerm("Spring")}>Spring</button>
                    <button className='badge2' onClick={() => setSearchTerm("Summer")}>Summer</button>
                    <button className='badge3' onClick={() => setSearchTerm("Winter")}>Winter</button>
                    <button className='badge4' onClick={() => setSearchTerm("Autumn")}>Autumn</button>
                </div>
    )
}

export default SeasonFilters;