import React from 'react';
import { arrayOf, string } from 'prop-types';

import ArrowPointerRight from '../../../public/svgs/arrow-pointer-right.svg';

import styles from './OrderBag.scss';

const OrderBag = ({ bagList }) => (
  <div className={styles.orderBagWrapper}>
    <div className={styles.orderBagTitle}>
      <img
        className={styles.tomatoes}
        src={`${process.env.PUBLIC_URL}/images/Tomatoes.png`}
        alt=""
      />
      <img
        className={styles.carrots}
        src={`${process.env.PUBLIC_URL}/images/Carrots.png`}
        alt=""
      />
      <h1>This weeks bag</h1>
      <p>
        Sunt autem quidam e nostris, qui studiose antiqua persequeris, claris et
        quale sit. Hanc ego cum teneam sententiam.
      </p>
      <button type="button">
        Order a bag
        <ArrowPointerRight />
      </button>
    </div>
    <div className={styles.bagListWrapper}>
      <span>What&apos;s inside</span>
      <ul>
        {bagList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
    <img src={`${process.env.PUBLIC_URL}/images/Bags.png`} alt="" />
  </div>
);

OrderBag.propTypes = {
  bagList: arrayOf(string),
};

OrderBag.defaultProps = {
  bagList: [],
};

export default OrderBag;
