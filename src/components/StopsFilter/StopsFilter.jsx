import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Checkbox from '../Checkbox/Checkbox';
import { stopsFilterList } from './stopsFilterList';
import styles from './StopsFilter.module.css';

// const mapStateToProps = (state) => {
//   const props = {
//     channels: channelsSelector(state),
//     currentChannelId: getCurrentChannelId(state),
//   };
//   return props;
// };

// const actionCreators = {
//   selectChannel: actions.selectChannel,
// };

class StopsFilter extends React.PureComponent {
  // handleSpacePress = (value) => (event) => {
  //   if (event.key === 'Space') {
  //     // change
  //   }
  // }

  render() {
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>Количество пересадок</h2>
        <div
          className={styles.checkbox}
          role="button"
          tabIndex="0"
          // onClick={this.handleAllChange}
          // onKeyUp={this.handleSpacePress}
        >
          <Checkbox value="all" checked={false} label="Все" />
        </div>
        {stopsFilterList.map(({ label, value }) => (
          <div
            className={styles.checkbox}
            key={value}
            role="button"
            tabIndex="0"
            // onClick={this.handleAllChange(value)}
            // onKeyUp={this.handleSpacePress(value)}
          >
            <Checkbox value={value} checked={false} label={label} />
          </div>
        ))}
      </div>
    );
  }
}

// StopsFilter.propTypes = {
// };

// StopsFilter.defaultProps = {
// };

// export default connect(mapStateToProps, actionCreators)(StopsFilter);
export default StopsFilter;
