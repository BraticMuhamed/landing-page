import React from 'react';
import { arrayOf, string } from 'prop-types';

import Bags from '../../../public/svgs/bags.svg';
import ArrowPointerRight from '../../../public/svgs/arrow-pointer-right.svg';
import Tomatoes from '../../../public/images/Tomatoes.png';
import Carrots from '../../../public/images/Carrots.png';

import styles from './OrderBag.scss';

const OrderBag = ({ bagList }) => (
  <div className={styles.orderBagWrapper}>
    <div className={styles.orderBagTitle}>
      <img className={styles.tomatoes} src={Tomatoes} alt="" />
      <img className={styles.carrots} src={Carrots} alt="" />
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
    <Bags />
  </div>
);

OrderBag.propTypes = {
  bagList: arrayOf(string),
};

OrderBag.defaultProps = {
  bagList: [],
};

export default OrderBag;
