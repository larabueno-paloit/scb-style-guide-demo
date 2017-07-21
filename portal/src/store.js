import createHistory from 'history/createBrowserHistory'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

/** --------------------------------------------------------
 *
 * Combine reducer - rootReducer
 */
const rootReducer = combineReducers({
  router: routerReducer
})

/** --------------------------------------------------------
 *
 * Combine middleware - rootMiddleware
 */
// configure reduxRouterMiddleware
export const history = createHistory()
const reduxRouterMiddleware = routerMiddleware(history)

// combine middleware
let rootMiddleware
if (process.env.NODE_ENV !== 'prod') {
  // non-prod env
  const { composeWithDevTools } = require('redux-devtools-extension')
  rootMiddleware = composeWithDevTools(applyMiddleware(
    reduxRouterMiddleware
  ))
} else {
  // prod env
  rootMiddleware = applyMiddleware(
    reduxRouterMiddleware
  )
}

/** --------------------------------------------------------
 *
 * END
 */
// create store
const store = createStore(rootReducer, rootMiddleware)

// export store
export default store
