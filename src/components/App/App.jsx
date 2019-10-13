import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as thunkActions from '../../actions/thunkActions';
import * as actions from '../../actions';
import { ticketsToRenderSelector } from '../../selectors';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import StopsFilter from '../StopsFilter/StopsFilter';
import SortingTabs from '../SortingTabs/SortingTabs';
import TicketList from '../TicketList/TicketList';
import styles from './App.module.css';

const mapStateToProps = (state) => {
  const { fetchingState, sortBy, filters } = state;
  const props = {
    fetchingState,
    sortBy,
    tickets: ticketsToRenderSelector(state),
    uncheckedStops: filters.stops,
  };
  return props;
};

const actionCreators = {
  changeSortingParam: actions.changeSortingParam,
  changeStopsFilter: actions.changeStopsFilter,
  getTickets: thunkActions.getTickets,
  showMore: actions.showMoreTickets,
};

class App extends React.Component {
  componentDidMount() {
    const { getTickets } = this.props;
    getTickets();
  }

  render() {
    const {
      tickets,
      fetchingState,
      uncheckedStops,
      sortBy,
      changeStopsFilter,
      changeSortingParam,
      showMore,
    } = this.props;
    return (
      <>
        <Header />
        <div className={styles.root}>
          <div className={styles.container}>
            <div className={styles.filters}>
              <StopsFilter filterValue={uncheckedStops} changeStopsFilter={changeStopsFilter} />
              <Loading isLoading={fetchingState === 'fetching'} />
            </div>
            <div className={styles.tickets}>
              <SortingTabs sortBy={sortBy} changeSortingParam={changeSortingParam} />
              <TicketList
                tickets={tickets}
                fetchingState={fetchingState}
                handleShowMore={showMore}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = ({
  getTickets: PropTypes.func,
  changeSortingParam: PropTypes.func,
  changeStopsFilter: PropTypes.func,
  showMore: PropTypes.func,
  fetchingState: PropTypes.string,
  sortBy: PropTypes.string,
  tickets: PropTypes.arrayOf(PropTypes.object),
  uncheckedStops: PropTypes.objectOf(PropTypes.bool),
});

export default connect(mapStateToProps, actionCreators)(App);
