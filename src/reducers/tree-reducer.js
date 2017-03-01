import {combineReducers} from 'redux';

import * as types from '../actions/action-types';

export const tree =  (state = {default: 'response'}, action) => {

  switch (action.type) {
    case types.FETCH_TREE:
      console.log( 'fetch tree reducer', action );

      switch (action.status) {
        case 'success':
          action.response.then(data => {
            state = [data]
            console.log( state );
            return state
          })
          break;
        case 'error':
          state = 'error'
          return state
          break;
      }

      return state;

    default:
      return state;
  }
};

export const activeFile =  (state = 'default file in reducer', action) => {
  switch (action.type) {

    case types.SHOW_FILE:
      console.log( 'active file reducer: ', action.file);
      state = action.file
      return state;

    default:
      return state;
  }
};

/*const treeReducer = combineReducers({
  tree,
  activeFile
});

export default treeReducer;*/