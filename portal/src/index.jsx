import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'assets/css/reset.css'
import store from 'store'
import App from 'router'

if (process.env.NODE_ENV !== 'prod') {
  // -------------------------------------------------
  // non-prod env
  const { AppContainer } = require('react-hot-loader')
  const renderApp = Component => render(<AppContainer>
    <Provider store={store}>
      <Component />
    </Provider>
  </AppContainer>, document.getElementById('app'))

  renderApp(App)

  // Hot reload
  module.hot && module.hot.accept('router', () => renderApp(App))
} else {
  // -------------------------------------------------
  // prod env
  render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))
}
