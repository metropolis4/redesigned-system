import * as actions from './constants';
import * as R from 'ramda';

import idFactory from '../../../util/id-factory';

const peopleReducer = (state = [], action) => {
  switch (action.type) {

    case actions.ADD_PERSON:
      const person = {
        ...action.person,
        id: idFactory.next().value
      };
      return R.insert(state.length, person, state);

    case actions.DELETE_PERSON:
      return R.reject(person => person.id === action.id, state);

    default:
      return state;
  }
}

export default peopleReducer;
