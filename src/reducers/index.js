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

const filters = handleActions({
  [actions.changeStopsFilter](state, { payload: { newValue } }) {
    return { stops: newValue };
  },
}, {});

const sortBy = handleActions({
  [actions.changeSortingParam](state, { payload: { sortingParam } }) {
    return sortingParam;
  },
}, '');

const numberOfTickets = handleActions({
  [actions.showMoreTickets](state) {
    return state + 5;
  },
}, 5);

const isError = handleActions({
  [actions.getTicketsFailure]() {
    return true;
  },
  [actions.getTicketsSuccess]() {
    return false;
  },
}, false);

export default combineReducers({
  tickets,
  fetchingState,
  filters,
  sortBy,
  numberOfTickets,
  isError,
});
