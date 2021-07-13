import {
  UPDATE_DATA,
  UPDATE_IMAGE,
  UPDATE_COLOR,
  UPDATE_TYPE,
  UPDATE_BACKGROUND,
  UPDATE_EXTENSION
} from '../actions/actionTypes'

const initialState = {
  isOpen: false,
  url: 'https://github.com/F2BEAR',
  image: '',
  color: '#000000',
  type: 'square',
  background: '#ffffff',
  extension: 'png'
}

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA: {
      return { ...state, url: action.payload }
    }
    case UPDATE_IMAGE: {
      return { ...state, image: action.payload }
    }
    case UPDATE_COLOR: {
      return { ...state, color: action.payload }
    }
    case UPDATE_BACKGROUND: {
      return { ...state, background: action.payload }
    }
    case UPDATE_TYPE: {
      return { ...state, type: action.payload }
    }
    case UPDATE_EXTENSION: {
      return { ...state, extension: action.payload }
    }
    default:
      return state
  }
}
export default defaultReducer
