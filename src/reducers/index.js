import people from './people-reducer.js';
import {tree, activeFile} from './tree-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people,
  tree,
  activeFile
});

export default rootReducer;
