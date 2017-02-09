import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { userReducer } from 'reducers/user'

export const reducers = combineReducers({
  routing: routerReducer,
  user: userReducer
})
