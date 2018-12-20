import { GET_DATA_SUCCEEDED, GET_DATA_ERROR } from '../actions/index'

const initialState = {
  data: null,
}

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_SUCCEEDED:
      return {
        ...state,
        error: null,
        data: action.data,
      }
    case GET_DATA_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
