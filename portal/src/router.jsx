import React from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route } from 'react-router-dom'

import { history } from 'store'
import { Layout } from 'components'

import {
  Home
} from 'routes'

export default () => <Router history={history}>
  <Layout>
    <Route exact path='/' component={Home} />
  </Layout>
</Router>
