import React, { Component, Fragment, useEffect, useState } from 'react';
import axios from 'axios';

function Userall() {

    const [users, setUsers] = useState([])

    function getAllUser() {
        return axios.get('http://localhost:4500/user', {
            headers: {
                accept: 'application/json'
                // 'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            (users) => setUsers(users.data),
            (err) => console.log(err),
        )
    }

    useEffect(() => {
        getAllUser()
    }, [])

    return (
        <Fragment>
            {
                (users.length > 0)
                && users.map(
                    (user, k) => (
                        <p> {user.name}</p>
                    )
                )
            }
            {(users.length === 0) && (<p>tidak ada data</p>)}
        </Fragment>

    )
}

export default Userall;
