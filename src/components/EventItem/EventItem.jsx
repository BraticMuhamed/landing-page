import React from 'react';
import { string, objectOf, bool } from 'prop-types';
import cn from 'classnames';

import styles from './EventItem.scss';

const EventItem = ({ event, isSpecialEvent }) => (
  <div
    className={cn({
      [styles.eventItemWrapper]: true,
      [styles.reverse]: event.reverse,
      [styles.special]: isSpecialEvent && !event.reverse,
      [styles.specialReverse]: isSpecialEvent && event.reverse,
    })}
  >
    <img src={event.image} alt="" />
    <div>
      <h1>{event.title}</h1>
      <span>{event.date}</span>
      <p>{event.description}</p>
    </div>
  </div>
);

EventItem.propTypes = {
  event: objectOf(string),
  isSpecialEvent: bool,
};

EventItem.defaultProps = {
  event: {},
  isSpecialEvent: false,
};

export default EventItem;
