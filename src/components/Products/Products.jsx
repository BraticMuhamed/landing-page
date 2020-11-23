import React from 'react';

import { ProductCategories, ProductItems } from '../../helpers/constants';
import Header from '../common/Header';
import ProductItem from '../ProductItem';
import OrderBag from '../OrderBag';

import Product1 from '../../../public/images/Product1.jpg';
import Product2 from '../../../public/images/Product2.jpg';
import Product3 from '../../../public/images/Product3.jpg';
import Product4 from '../../../public/images/Product4.jpg';
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
        return Product1;
      case 2:
        return Product2;
      case 3:
        return Product3;
      default:
        return Product4;
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
