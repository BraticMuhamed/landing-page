import React, { useState } from 'react';

import MenuItem from '../MenuItem/MenuItem';

import { MenuItems, Menus } from '../../helpers/constants';

import MenuImage from '../../../public/svgs/menu-image.svg';
import ArrowHeadRightOutline from '../../../public/svgs/arrowhead-right-outline.svg';

import styles from './Menu.scss';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(Menus[0]);
  const items = [...MenuItems, ...MenuItems, ...MenuItems];

  const handleMenuClick = (item) => setSelectedMenu(item);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <span>Select a menu</span>
        <ul>
          {Menus.map((item) => (
            <li key={item + Math.random()}>
              <button
                onClick={() => handleMenuClick(item)}
                onKeyPress={undefined}
                type="button"
                className={selectedMenu === item ? styles.selectedButton : ''}
              >
                {item}
                {selectedMenu === item ? (
                  <ArrowHeadRightOutline className={styles.arrowHead} />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.menuItemsWrapper}>
        <span className={styles.whatWeServe}>What we serve</span>
        <div className={styles.menuItemsHeader}>
          <h1>{selectedMenu}</h1>
          <button type="button">See PDF menu</button>
        </div>
        <div className={styles.menuItems}>
          {items.map((item) => (
            <MenuItem
              key={item.title + Math.random()}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <MenuImage className={styles.backgroundImage} />
    </div>
  );
};

export default Menu;
