import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../Ticket/Ticket';
import * as actions from '../../actions';

// const mapStateToProps = (state) => {
// };

// const actionCreators = {
// };

const TicketList = ({ tickets }) => {
  if (!tickets || !tickets.length) {
    return (<div>Билеты не найдены</div>);
  }
  return (
    <div>
      {tickets.map((item) => <Ticket key={item.id} ticket={item} />)}
    </div>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// export default connect(mapStateToProps, actionCreators)(TicketList);
export default TicketList;
