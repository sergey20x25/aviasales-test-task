import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const tickets = handleActions({
  [actions.getTicketsSuccess](state, { payload: { ticketBatch } }) {
    return [...state, ...ticketBatch];
  },
}, []);

const fetchingState = handleActions({
  [actions.getTicketsRequest]() {
    return 'fetching';
  },
  [actions.getTicketsFailure]() {
    return 'failure';
  },
  [actions.fetchingDone]() {
    return 'done';
  },
}, 'none');

export default combineReducers({
  tickets,
  fetchingState,
});
