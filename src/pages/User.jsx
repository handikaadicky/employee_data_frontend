import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Userdetail from './Userdetail'
import Usernew from './Usernew'
import Userall from './Userall'


function User() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/user">
                    <Userall />
                </Route>
                <Route path="/user/new">
                    <Usernew />
                </Route>
                <Route path="/user/:id">
                    <Userdetail />
                </Route>
            </Switch>
        </Fragment>
    )
}

export default User