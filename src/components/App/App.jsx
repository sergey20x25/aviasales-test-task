import React from 'react';
import { connect } from 'react-redux';
import * as thunkActions from '../../actions/thunkActions';
import Header from '../Header/Header';
import StopsFilter from '../StopsFilter/StopsFilter';
import SortingTabs from '../SortingTabs/SortingTabs';
import TicketList from '../TicketList/TicketList';
import styles from './App.module.css';
import tickets from './ticketExample';

const mapStateToProps = (state) => {
  const { fetchingState } = state;
  return { fetchingState };
};

const actionCreators = {
  getTickets: thunkActions.getTickets,
};

const App = () => (
  <>
    <Header />
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <StopsFilter />
        </div>
        <div className={styles.tickets}>
          <SortingTabs />
          <TicketList tickets={tickets} />
        </div>
      </div>
    </div>
  </>
);

export default connect(mapStateToProps, actionCreators)(App);
