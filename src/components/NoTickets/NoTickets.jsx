import React from 'react';
import styles from './NoTickets.module.css';

const NoTickets = React.memo(() => (
  <div className={styles.root}>
    По заданным критериям билеты не найдены
  </div>
));

export default NoTickets;
