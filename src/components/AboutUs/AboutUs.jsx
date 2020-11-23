import React from 'react';

import Welcome from '../Welcome/Welcome';

import TextLogo from '../../../public/svgs/text-logo.svg';
import ArrowLeft from '../../../public/svgs/arrow-left.svg';
import ArrowRight from '../../../public/svgs/arrow-right.svg';

import styles from './AboutUs.scss';

const AboutUs = () => (
  <div className={styles.aboutUsContainer}>
    <Welcome />
    <img src={`${process.env.PUBLIC_URL}/images/ShopDark.jpg`} alt="" />
    <TextLogo className={styles.textLogo} />
    <div className={styles.aboutUsWrapper}>
      <div className={styles.aboutUsPara}>
        <span className={styles.ourStory}>Our story</span>
        <span className={styles.aboutUsText}>About us</span>
        <p className={styles.paragraphText}>
          Sunt autem quidam e nostris, qui studiose antiqua persequeris, claris
          et quale sit. Hanc ego cum teneam sententiam, quid percipit aut
          officiis debitis aut dolores suscipiantur. Ut placet, inquam tum
          dicere exorsus est cur verear, ne ad naturam aut.
        </p>
        <p className={styles.paragraphText}>
          Torquatos nostros? quos dolores eos, qui studiose antiqua persequeris,
          claris et quale sit extremum et caritatem, quae sine causa, mox
          videro; interea hoc epicurus in gravissimo bello animadversionis metu
          degendae praesidia firmissima filium morte multavit si sine dubio
          praeclara.
        </p>
        <div>
          <button type="button" className={styles.buttons}>
            <ArrowLeft />
          </button>
          <button type="button" className={styles.buttons}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/AboutUsImage.jpg`} alt="" />
    </div>
  </div>
);

export default AboutUs;
