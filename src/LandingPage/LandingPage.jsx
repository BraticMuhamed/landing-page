import React from 'react';

import AboutUs from '../components/AboutUs/AboutUs';
import Events from '../components/Events/Events';
import Footer from '../components/Footer/Footer';
import HeaderBar from '../components/HeaderBar';
import Menu from '../components/Menu';
import Partners from '../components/Partners';
import Products from '../components/Products';

import styles from './LandingPage.scss';

const LandingPage = () => (
  <div>
    <HeaderBar />
    <AboutUs />
    <Menu />
    <Products />
    <Partners />
    <Events />
    <Footer />
  </div>
);

export default LandingPage;
