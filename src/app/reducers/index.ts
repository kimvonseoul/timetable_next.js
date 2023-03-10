import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import test from './test';
import user_reducer from './DB/users';
import message_reducer from './DB/messages'

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      return combineReducers({ test, user_reducer, message_reducer })(state, action);
  }
};

export default rootReducer;
