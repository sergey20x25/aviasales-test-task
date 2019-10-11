import React from 'react';
import {
  getStartAndFinishTime,
  formatDuration,
  getDeclension,
  splitNumber,
} from '../../utils';
import styles from './Ticket.module.css';
import defaultImage from './defaultImage.png';

const renderSegment = ({
  origin,
  destination,
  date,
  duration,
  stops,
}) => (
  <div key={date} className={styles.segment}>
    <div className={styles.route}>
      <div className={styles.label}>
        {`${origin} – ${destination}`}
      </div>
      <div className={styles.info}>
        {getStartAndFinishTime(date, duration)}
      </div>
    </div>
    <div className={styles.length}>
      <div className={styles.label}>В ПУТИ</div>
      <div className={styles.info}>
        {formatDuration(duration)}
      </div>
    </div>
    <div className={styles.stops}>
      <div className={styles.label}>
        {stops.length === 0
          ? 'БЕЗ ПЕРЕСАДОК'
          : `${stops.length} ${getDeclension(stops.length, ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'])}`}
      </div>
      <div className={styles.info}>
        {stops.join(', ')}
      </div>
    </div>
  </div>
);

const Ticket = ({ ticket }) => {
  const {
    price,
    carrier,
    segments,
  } = ticket;
  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <div className={styles.price}>
          {`${splitNumber(price)} Р`}
        </div>
        <div className={styles.carrier}>
          <img src={carrier ? `http://pics.avs.io/99/36/${carrier}.png` : defaultImage} alt="carrier" />
        </div>
      </div>
      <div className={styles.row}>
        {segments.map((segment) => renderSegment(segment))}
      </div>
    </div>
  );
};

export default Ticket;
