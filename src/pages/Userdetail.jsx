import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

function Userdetail() {
    const params = useParams()

    return (
        <div>
            User Detail { params.id}
        </div>
    )
}

export default Userdetail