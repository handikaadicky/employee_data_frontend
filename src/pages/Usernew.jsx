import React, { Component } from 'react';


function Usernew() {
    function handleClick() {
        console.log('saving')

    }
    return (
        <div>
            <input type="text" />
            <button onClick={handleClick}>save</button>
        </div>
    )
}

export default Usernew