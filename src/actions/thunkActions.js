/* eslint-disable import/prefer-default-export */
/* eslint-disable no-await-in-loop */
import * as actions from '.';
import addIds from '../utils';
import { getTicketBatchRes, getSearchId } from '../fetch';

const getTickets = () => async (dispatch) => {
  try {
    dispatch(actions.getTicketBatchRequest());
    const params = await getSearchId();
    let done = false;
    while (!done) {
      const response = await getTicketBatchRes(params);
      const { stop, tickets: ticketBatch } = await response.json();
      addIds(ticketBatch);
      dispatch(actions.getTicketBatchSuccess({ ticketBatch }));
      done = stop;
    }
    dispatch(actions.fetchingDone());
  } catch (e) {
    dispatch(actions.getTicketBatchFailure());
    throw e;
  }
};

export { getTickets };
