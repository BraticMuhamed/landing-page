import React from 'react';

import BackgroundLogo from '../../../public/svgs/background-logo.svg';

import styles from './Welcome.scss';

const Welcome = () => (
  <div className={styles.welcomeWrapper}>
    <BackgroundLogo className={styles.logoColor} />
    <div className={styles.centerContent}>
      <span>Bondens Västerås</span>
      <span>Welcome to us</span>
      <p>
        Laudem et voluptatem sequi nesciunt, neque porro quisquam est, necesse
        est, quid sit. Certe
      </p>
      <button type="button">Learn more</button>
    </div>
    <BackgroundLogo className={styles.logoColor} />
  </div>
);

export default Welcome;
