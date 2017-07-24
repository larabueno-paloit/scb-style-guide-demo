import { compose, withState, withHandlers } from 'recompose'

const enhanceState = withState('show', 'updateShow', false)
const enhanceHandlers = withHandlers({
  toggleShow: ({ updateShow }) => evt => updateShow(show => !show)
})

export default compose(
  enhanceState,
  enhanceHandlers
)
