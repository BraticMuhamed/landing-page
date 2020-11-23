import React from 'react';

import CompanyLogo from '../../../public/svgs/company-logo.svg';
import Bell from '../../../public/svgs/bell.svg';
import { HeaderButtons } from '../../helpers/constants';

import styles from './HeaderBar.scss';

const HeaderBar = () => (
  <header className={styles.headerBarWrapper}>
    <CompanyLogo className={styles.headerLogo} />
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
