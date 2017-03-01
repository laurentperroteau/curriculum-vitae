import people from './people-reducer.js';
import tree from './tree-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people,
  tree
});

export default rootReducer;
