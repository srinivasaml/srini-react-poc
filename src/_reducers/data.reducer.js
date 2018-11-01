import { alertConstants } from '../_constants';

export function mandateData(state = {}, action) {
  switch (action.type) {
    case alertConstants.ADDDATA:
      return {
        type: 'ADD-DATA',
        message: action.data
      }; 
    default:
      return state
  }
}