import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, value, checked }) => (
  <>
    <label className={styles.label} htmlFor={value}>
      <input className={styles.input} type="checkbox" id={value} checked={checked} value={value} />
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <rect
            stroke={checked ? '#2196F3' : '#9ABBCE'}
            fill="none"
            x=".5"
            y=".5"
            width="19"
            height="19"
            rx="1.5"
          />
          {checked ? (
            <path
              fill="#2196F3"
              d="M8.28571 14L4 10.1612L5.20857 9.0787L8.28571 11.8273L14.7914 6L16 7.09021L8.28571 14Z"
            />
          )
            : null}
        </g>
      </svg>
      <span className={styles.title}>{label}</span>
    </label>
  </>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
};

export default Checkbox;
