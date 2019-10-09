import { createAction } from 'redux-actions';

export const getTicketsRequest = createAction('TICKETS_GET_REQUEST');
export const getTicketsSuccess = createAction('TICKETS_GET_SUCCESS');
export const getTicketsFailure = createAction('TICKETS_GET_FAILURE');

export const fetchingDone = createAction('FETCHING_DONE');
