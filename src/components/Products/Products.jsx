import React from 'react';

import { ProductCategories, ProductItems } from '../../helpers/constants';
import Header from '../common/Header';
import ProductItem from '../ProductItem';
import OrderBag from '../OrderBag';

import Bell from '../../../public/svgs/bell.svg';

import styles from './Products.scss';

const Products = () => {
  const headerAboveText = 'Fresh and high quality';
  const headerTitle = 'Our products';
  const selectCateogryText = 'Select a category you want';
  const bagList = [
    'Milk 1l',
    'Frsh apples',
    'Lobster',
    '2 breads',
    'Special product',
    'special product',
  ];
  const getProductImage = () => {
    switch (Math.floor(Math.random() * 4 + 1)) {
      case 1:
        return `${process.env.PUBLIC_URL}/images/Product1.jpg`;
      case 2:
        return `${process.env.PUBLIC_URL}/images/Product2.jpg`;
      case 3:
        return `${process.env.PUBLIC_URL}/images/Product3.jpg`;
      default:
        return `${process.env.PUBLIC_URL}/images/Product4.jpg`;
    }
  };
  const productItems = [...ProductItems, ...ProductItems].map((item) => ({
    ...item,
    image: getProductImage(),
  }));

  return (
    <div className={styles.productsWrapper}>
      <Header aboveText={headerAboveText} title={headerTitle} />
      <div className={styles.productsHeader}>
        <p>
          Sunt autem quidam e nostris, qui studiose antiqua persequeris, claris
          et quale sit. Hanc ego cum teneam sententiam.
        </p>
        <span className={styles.productsHeaderSpan}>
          All listed products can be found in our store
        </span>
      </div>
      <div className={styles.productCategoryHeader}>
        <span>{selectCateogryText}</span>
        <ul>
          {ProductCategories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
      <div className={styles.productItems}>
        {productItems.map((product) => (
          <ProductItem product={product} key={product.title + Math.random()} />
        ))}
      </div>
      <div className={styles.backgroundImage}>
        <button type="button">
          <Bell />
          See all products and order
        </button>
      </div>
      <OrderBag bagList={bagList} />
    </div>
  );
};

export default Products;
