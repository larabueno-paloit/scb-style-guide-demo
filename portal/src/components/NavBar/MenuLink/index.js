import { connect } from 'react-redux'
import { get } from 'lodash'

import Pure from './Pure'

const s = state => ({
  pathname: get(state, 'router.location.pathname', '')
})

export default connect(s)(Pure)
