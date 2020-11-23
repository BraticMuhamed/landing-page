import React from 'react';
import { string, objectOf } from 'prop-types';
import cn from 'classnames';

import styles from './EventItem.scss';

const EventItem = ({ event }) => (
  <div
    className={cn({
      [styles.eventItemWrapper]: true,
      [styles.reverse]: event.reverse,
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
};

EventItem.defaultProps = {
  event: {},
};

export default EventItem;
