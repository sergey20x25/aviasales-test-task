import { createAction } from 'redux-actions';

export const getTicketBatchRequest = createAction('TICKET_BATCH_GET_REQUEST');
export const getTicketBatchSuccess = createAction('TICKET_BATCH_GET_SUCCESS');
export const getTicketBatchFailure = createAction('TICKET_BATCH_GET_FAILURE');

export const fetchingDone = createAction('FETCHING_DONE');
