import React from 'react';
import { string } from 'prop-types';

import styles from './MenuItem.scss';

const MenuItem = ({ title, price, description }) => (
  <div className={styles.menuItemWrapper}>
    <div className={styles.menuTitle}>
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>{price}</span>
    </div>
    <p className={styles.description}>{description}</p>
  </div>
);

MenuItem.propTypes = {
  title: string,
  price: string,
  description: string,
};

MenuItem.defaultProps = {
  title: '',
  price: '',
  description: '',
};

export default MenuItem;
