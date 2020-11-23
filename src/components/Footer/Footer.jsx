import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { WorkingHours } from '../../helpers/constants';

import FacebookLogo from '../../../public/svgs/facebook-logo.svg';
import InstagramLogo from '../../../public/svgs/instagram-big-logo.svg';
import Keypad from '../../../public/svgs/keypad.svg';
import CompanyLogo from '../../../public/svgs/company-logo-black.svg';
import Badge from '../../../public/svgs/badge.svg';

import styles from './Footer.scss';

const position = [59.5918777262084, 16.514536127229757];

const Footer = () => (
  <div className={styles.footerWrapper}>
    <div className={styles.contactWrapper}>
      <div className={styles.textWrapper}>
        <span className={styles.titleText}>Our store location</span>
        <span className={styles.pText}>
          388 Liliane Meadow Suite 622, Beahanburgh, MI 62009-1917
        </span>
        <div className={styles.mapWrapper}>
          <MapContainer center={position} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.titleText}>Opening hours</span>
        <span className={styles.pText}>
          388 Liliane Meadow Suite 622, Beahanburgh, MI 62009-1917
        </span>
        <div className={styles.workingHours}>
          {WorkingHours.map((item) => (
            <div className={styles.workingHoursItem}>
              <span className={styles.day}>{item.day}</span>
              <span className={styles.hour}>{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.titleText}>email</span>
        <span className={styles.email}>raphaelle93@hotmail.com</span>
        <span className={styles.titleText}>phone number</span>
        <span className={styles.number}>
          <Keypad />
          (314) 951-3430
        </span>
        <span className={styles.titleText}>Follow us on social media</span>
        <span className={styles.logos}>
          <FacebookLogo />
          <InstagramLogo />
        </span>
      </div>
    </div>
    <div className={styles.end}>
      <span>© Bondens Västerås 2020 • All rights reserved.</span>
      <CompanyLogo />
      <Badge />
    </div>
  </div>
);

export default Footer;
