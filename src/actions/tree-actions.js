import * as types from './action-types';

export const addPerson = (person) => {
  return {
    type: types.ADD_PERSON,
    person
  };
}

export const showFile = (file) => {
  console.log( 'tree actions :', file );
  return {
    type: types.SHOW_FILE,
    file
  };
}
