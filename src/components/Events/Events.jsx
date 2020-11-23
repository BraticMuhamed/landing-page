import React, { useState } from 'react';
import Select from 'react-select';

import Header from '../common/Header';
import EventItem from '../EventItem';

import {
  EventOptions,
  EventItems,
  SpecialOpeningHours,
  SpecialEvents,
} from '../../helpers/constants';

import InstagramLogo from '../../../public/svgs/instagram-logo.svg';

import styles from './Events.scss';

const Events = () => {
  const [dropdownValue, setDropdownValue] = useState('april2020');

  return (
    <div className={styles.eventsWrapper}>
      <Header title="Bondens events" />
      <p>Check out our latest news and events that are happening.</p>
      <Select
        options={EventOptions}
        value={dropdownValue}
        onChange={setDropdownValue}
        className={styles.selectWrapper}
        defaultValue={dropdownValue}
      />
      <div className={styles.eventItemsWrapper}>
        {EventItems.map((event) => (
          <EventItem event={event} key={event.image} />
        ))}
      </div>
      <div>
        <h1>Special opening hours</h1>
        <p className={styles.paragraphOpeningHours}>
          Primum igitur inquit sic agam ut de voluptate et quasi involuta
        </p>
        <div className={styles.specialOpeningHoursWrapper}>
          {SpecialOpeningHours.map((sEvent) => (
            <div className={styles.specialOpeningHoursItem}>
              <span>{sEvent.date.toDateString()}</span>
              <span>{sEvent.hours}</span>
              <span>{sEvent.reason}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.specialEventContainer}>
        <h1 className={styles.specialEventHeader}>Special events</h1>
        <div className={styles.specialEventWrapper}>
          {SpecialEvents.map((specialEvent) => (
            <EventItem event={specialEvent} isSpecialEvent />
          ))}
        </div>
      </div>
      <div className={styles.instagramWrapper}>
        <img
          src={`${process.env.PUBLIC_URL}/images/InstagramImage1.jpg`}
          alt=""
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/InstagramImage2.jpg`}
          alt=""
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/InstagramImage3.jpg`}
          alt=""
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/InstagramImage4.jpg`}
          alt=""
        />
        <button type="button">
          <InstagramLogo />
          Follow us on Instagram
        </button>
      </div>
    </div>
  );
};

export default Events;
