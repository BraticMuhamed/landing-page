import React from 'react';

import Bell from '../../../public/svgs/bell.svg';
import { HeaderButtons } from '../../helpers/constants';

import styles from './HeaderBar.scss';

const HeaderBar = () => (
  <header className={styles.headerBarWrapper}>
    <img
      src={`${process.env.PUBLIC_URL}/images/CompanyLogo.png`}
      className={styles.headerLogo}
      alt=""
    />
    <div className={styles.buttonsWrapper}>
      {HeaderButtons.map((label) => (
        <button type="button" className={styles.buttons} key={label}>
          {label}
        </button>
      ))}
      <button type="button" className={styles.productsButton}>
        <Bell />
        See our products
      </button>
    </div>
  </header>
);

export default HeaderBar;
