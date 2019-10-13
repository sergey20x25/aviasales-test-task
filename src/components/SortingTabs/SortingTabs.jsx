import React from 'react';
import PropTypes from 'prop-types';
import sortingTabsList from './sortingTabsList';
import styles from './SortingTabs.module.css';

class SortingTabs extends React.PureComponent {
  handleClick = (sortingParam) => () => {
    const { handleTabChange } = this.props;
    handleTabChange({ sortingParam });
  }

  render() {
    const { sortBy } = this.props;
    return (
      <div className={styles.root}>
        {sortingTabsList.map(({
          name,
          label,
          isFirst,
          isLast,
        }) => {
          const active = sortBy === name;
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

SortingTabs.propTypes = ({
  handleTabChange: PropTypes.func,
  sortBy: PropTypes.string,
});

export default SortingTabs;
