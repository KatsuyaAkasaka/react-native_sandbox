import { combineReducers } from 'redux';
import { nameAction, nameTypes } from "./actions"

const INITIAL_STATE: Pick<nameAction, 'name'> = {
  name: 'Nanasi'
}
const reducer = (state: Partial<Pick<nameAction, 'name'>> = INITIAL_STATE, action: nameAction) => {
  switch (action.type) {
    case nameTypes.add:
      return { ...state, name: action.name }
    case nameTypes.delete:
      return { ...state, name: '' }
    default:
      return state;
  }
}

export const reducers = combineReducers({
  user: reducer
})
