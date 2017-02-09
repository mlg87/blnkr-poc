import * as ActionTypes from 'actions'

export const initialState = {
  userArrived: false
}

export const userReducer = ( state = initialState, action ) => {
  const { type } = action

  switch (type) {
    case ActionTypes.USER_ARRIVED:
      return {
        ...state,
        userArrived: true
      }
    default:
      return state
  }
}
