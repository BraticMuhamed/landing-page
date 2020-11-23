import { string } from 'prop-types';
import React from 'react';

import styles from './Header.scss';

const Header = ({ title, aboveText }) => (
  <header className={styles.headerWrapper}>
    <span>{aboveText}</span>
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  title: string,
  aboveText: string,
};

Header.defaultProps = {
  title: '',
  aboveText: '',
};

export default Header;
