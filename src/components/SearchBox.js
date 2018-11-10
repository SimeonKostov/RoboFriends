import React from 'react';

const SearchBox=(props)=>{
    return(
        <div>
            <input className='bg-lightest-blue' type='search' placeholder="search robots" onChange={props.searchChange} />
        </div>
    )
}

export default SearchBox;