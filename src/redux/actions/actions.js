import {
  UPDATE_DATA,
  UPDATE_IMAGE,
  UPDATE_COLOR,
  UPDATE_TYPE,
  UPDATE_EXTENSION,
  UPDATE_BACKGROUND
} from './actionTypes'

export const updateData = (url) => ({
  type: UPDATE_DATA,
  payload: url
})

export const updateImage = (image) => ({
  type: UPDATE_IMAGE,
  payload: image
})

export const updateColor = (color) => ({
  type: UPDATE_COLOR,
  payload: color
})

export const updateBackground = (background) => ({
  type: UPDATE_BACKGROUND,
  payload: background
})

export const updateType = (type) => ({
  type: UPDATE_TYPE,
  payload: type
})

export const updateExtension = (extension) => ({
  type: UPDATE_EXTENSION,
  payload: extension
})
