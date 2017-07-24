import React from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route } from 'react-router-dom'

import { history } from 'store'
import { Layout } from 'components'

import {
  Home,
  Icons,
  Colors
} from 'routes'

export default () => <Router history={history}>
  <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/icons' component={Icons} />
    <Route exact path='/colors' component={Colors} />
  </Layout>
</Router>
