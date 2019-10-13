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
    stopsFilterValue: filters.stops,
  };
  return props;
};

const actionCreators = {
  changeSortingParam: actions.changeSortingParam,
  changeStopsFilter: actions.changeStopsFilter,
  showMore: actions.showMoreTickets,
  getTickets: thunkActions.getTickets,
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
      stopsFilterValue,
      sortBy,
      changeStopsFilter,
      changeSortingParam,
      showMore,
    } = this.props;
    const isLoading = fetchingState === 'fetching';
    return (
      <>
        <Header />
        <div className={styles.root}>
          <div className={styles.container}>
            <div className={styles.sidebar}>
              <StopsFilter filterValue={stopsFilterValue} handleFilterChange={changeStopsFilter} />
              <Loading isLoading={isLoading} />
            </div>
            <div className={styles.main}>
              <SortingTabs sortBy={sortBy} handleTabChange={changeSortingParam} />
              <TicketList tickets={tickets} isLoading={isLoading} handleShowMore={showMore} />
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
  stopsFilterValue: PropTypes.objectOf(PropTypes.bool),
});

export default connect(mapStateToProps, actionCreators)(App);
