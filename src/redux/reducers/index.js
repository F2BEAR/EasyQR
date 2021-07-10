import { TOGGLE_MENU } from '../actions/actionTypes'

const initialState = {
  isOpen: false
}

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      return { ...state, isOpen: !state.isOpen }
    }
    default:
      return state
  }
}
export default defaultReducer
