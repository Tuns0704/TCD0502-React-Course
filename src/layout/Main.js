import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Users, Search, User } from '../components/users';
import { About, NotFound, Login } from './../components/pages';

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Fragment>
            <Search />
            <Users />
          </Fragment>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/user/:loginId">
          <User />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default Main