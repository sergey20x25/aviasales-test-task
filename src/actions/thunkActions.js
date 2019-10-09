/* eslint-disable no-await-in-loop */
import * as actions from '.';
import addIds from '../utils';
import { getTicketBatchRes, getSearchId } from '../fetch';

const getTickets = () => async (dispatch) => {
  try {
    dispatch(actions.getTicketsRequest());
    const params = await getSearchId();
    let done = false;
    while (!done) {
      const response = await getTicketBatchRes(params);
      const { stop, tickets: ticketBatch } = await response.json();
      addIds(ticketBatch);
      dispatch(actions.getTicketsSuccess({ ticketBatch }));
      done = stop;
    }
    dispatch(actions.fetchingDone());
  } catch (e) {
    dispatch(actions.getTicketsFailure());
    throw e;
  }
};

export { getTickets };
