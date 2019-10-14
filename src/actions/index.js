import { createAction } from 'redux-actions';

export const getTicketsRequest = createAction('TICKETS_GET_REQUEST');
export const getTicketsSuccess = createAction('TICKETS_GET_SUCCESS');
export const getTicketsFailure = createAction('TICKETS_GET_FAILURE');
export const fetchingDone = createAction('FETCHING_DONE');
export const changeStopsFilter = createAction('STOPS_FILTER_CHANGE');
export const changeSortingParam = createAction('SORTING_PARAM_CHANGE');
export const changeNumberOfTickets = createAction('CHANGE_NUMBER_OF_TICKETS');
