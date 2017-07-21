import React from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route } from 'react-router-dom'

import { NavBar } from 'components'
import { history } from 'store'
import {
  Home
} from 'routes'

export default () => <Router history={history}>
  <div>
    <NavBar />

    <Route exact path='/' component={Home} />
  </div>
</Router>
