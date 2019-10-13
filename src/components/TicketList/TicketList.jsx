import React from 'react';
import PropTypes from 'prop-types';
import Ticket from '../Ticket/Ticket';
import NoTickets from '../NoTickets/NoTickets';
import styles from './TicketList.module.css';

const TicketList = React.memo(({ tickets, fetchingState, handleShowMore }) => {
  if ((!tickets || !tickets.length) && fetchingState === 'done') {
    return (<NoTickets />);
  }
  return (
    <div className={styles.root}>
      {tickets.map((item) => <Ticket key={item.id} ticket={item} />)}
      {tickets.length > 0
        && <button className={styles.button} type="button" onClick={handleShowMore}>ПОКАЗАТЬ ЕЩЕ</button>}
    </div>
  );
});

TicketList.propTypes = ({
  fetchingState: PropTypes.string,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleShowMore: PropTypes.func,
});

export default TicketList;
