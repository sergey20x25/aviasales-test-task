import React from 'react';
import PropTypes from 'prop-types';
import Segment from '../Segment/Segment';
import { splitNumber } from '../../utils';
import styles from './Ticket.module.css';
import defaultImage from './resources/defaultImage.png';

const Ticket = React.memo(({ ticket }) => {
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
        {segments.map((item) => <Segment key={item.date} segment={item} />)}
      </div>
    </div>
  );
});

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Ticket;
