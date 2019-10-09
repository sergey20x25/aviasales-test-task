import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const tickets = handleActions({
  [actions.getTicketBatchSuccess](state, { payload: { ticketBatch } }) {
    return [...state, ...ticketBatch];
  },
}, []);

const fetchingState = handleActions({
  [actions.getTicketBatchRequest]() {
    return 'fetching';
  },
  [actions.getTicketBatchFailure]() {
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

// const channels = handleActions({
//   [actions.selectChannel](state, { payload: { id } }) {
//     return {
//       ...state,
//       currentChannelId: id,
//     };
//   },
// }, { byId: {}, allIds: [] });

// const messages = handleActions({
//   [actions.addMessage](state, { payload: { message } }) {
//     return [...state, message];
//   },
// }, []);

// const sendMessageState = handleActions({
//   [actions.sendMessageRequest]() {
//     return 'requested';
//   },
//   [actions.sendMessageFailure]() {
//     return 'failed';
//   },
//   [actions.sendMessageSuccess]() {
//     return 'finished';
//   },
// }, 'none');

// export default combineReducers({
//   channels,
//   messages,
//   sendMessageState,
//   form: formReducer,
// });
