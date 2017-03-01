import * as types from './action-types';

import $http from '../service/async/http'

export const fetchTree = () => {
  return {
    type: types.FETCH_TREE,
    status: 'success',
    response: $http('../tree/tree.json').get()
  };
}

export const showFile = (file) => {
  console.log( 'tree actions :', file );
  return {
    type: types.SHOW_FILE,
    file
  };
}
