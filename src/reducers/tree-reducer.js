import * as types from '../actions/action-types';

export default (state = 'default file in reducer', action) => {
  switch (action.type) {
    case types.SHOW_FILE:
      console.log( 'tree reducer: ', action.file);
      state = action.file
      return state;
    default:
      return state;
  }
};
