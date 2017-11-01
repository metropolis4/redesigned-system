import * as actions from './constants';

export const addPerson = (person) => {
  return {
    type: actions.ADD_PERSON,
    person
  };
}

export const deletePerson = (id) => {
  return {
    type: actions.DELETE_PERSON,
    id
  };
}
