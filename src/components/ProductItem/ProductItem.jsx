import React from 'react';
import { objectOf, string } from 'prop-types';

import styles from './ProductItem.scss';

const ProductItem = ({ product }) => (
  <div className={styles.productItemWrapper}>
    <img src={product.image} alt="" />
    <span className={styles.title}>{product.title}</span>
    <p className={styles.description}>{product.description}</p>
    <span className={styles.price}>{product.price}</span>
  </div>
);

ProductItem.propTypes = {
  product: objectOf(string),
};

ProductItem.defaultProps = {
  product: {},
};

export default ProductItem;
