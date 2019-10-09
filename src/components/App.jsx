import React from 'react';
import { connect } from 'react-redux';
import * as thunkActions from '../actions/thunkActions';
import Header from './Header/Header';
import './App.css';

const mapStateToProps = (state) => {
  const { fetchingState } = state;
  return { fetchingState };
};

const actionCreators = {
  getTickets: thunkActions.getTickets,
};

class App extends React.Component {
  handleClick = () => {
    const { getTickets } = this.props;
    getTickets();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button type="button" onClick={this.handleClick}>get</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(App);
