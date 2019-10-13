import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash-es/omit';
import Checkbox from '../Checkbox/Checkbox';
import stopsFilterList from './stopsFilterList';
import styles from './StopsFilter.module.css';

const allValues = stopsFilterList.reduce((acc, item) => ({ ...acc, [item.value]: true }), {});
class StopsFilter extends React.PureComponent {
  handleCheck = (event) => {
    const { checked, value } = event.target;
    const { filterValue, handleFilterChange } = this.props;
    let newValue;
    if (checked) {
      newValue = omit(filterValue, `${value}`);
    } else {
      newValue = { ...filterValue, [value]: true };
    }
    if (Object.keys(newValue).length === 0) {
      newValue = null;
    }
    handleFilterChange({ newValue });
  }

  handleAllCheck = (event) => {
    const { handleFilterChange } = this.props;
    const { checked } = event.target;
    const newValue = checked ? null : allValues;
    handleFilterChange({ newValue });
  }

  render() {
    const { filterValue } = this.props;
    const checkedAll = filterValue === null;
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>Количество пересадок</h2>
        <Checkbox value="all" checked={checkedAll} label="Все" onCheck={this.handleAllCheck} />
        {stopsFilterList.map(({ label, value }) => (
          <Checkbox
            key={value}
            value={value}
            checked={checkedAll || !(filterValue.hasOwnProperty(value))}
            label={label}
            onCheck={this.handleCheck}
          />
        ))}
      </div>
    );
  }
}

StopsFilter.propTypes = {
  handleFilterChange: PropTypes.func,
  filterValue: PropTypes.objectOf(PropTypes.bool),
};

export default StopsFilter;
