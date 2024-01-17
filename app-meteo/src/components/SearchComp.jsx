import React from 'react';
import logo from '../assets/logo.png';

function SearchComp({ location, setLocation, handleKeyDown }) {
    return (
        <div className='search'>
            <h2>TuttoTempo <img src={logo} className="logo" alt="weather"></img></h2>
            <input
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Inserisci città'
                type="text" />
        </div>
    );
}

export default SearchComp;
