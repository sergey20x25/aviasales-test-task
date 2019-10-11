import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import sortingTabsList from './sortingTabsList';
import styles from './SortingTabs.module.css';

class SortingTabs extends React.Component {
  handleClick = (name) => (e) => {
  }

  render() {
    const sort = 'price';
    return (
      <div className={styles.root}>
        {sortingTabsList.map(({
          name,
          label,
          isFirst,
          isLast,
        }) => {
          const active = sort === name;
          return (
            <button
              key={name}
              type="button"
              onClick={this.handleClick(name)}
              className={`${styles.button} ${isFirst ? styles.first : ''} ${isLast ? styles.last : ''} ${active ? styles.active : ''}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  }
}

export default SortingTabs;
