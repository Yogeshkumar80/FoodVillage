import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Experience Village Freshness: Taste the Beauty of Food" />
      <h1 className="app__header-h1">The Key To Find Healthy Village Food</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>"Get all your favorites made with fresh village veggies and pure ingredients. Taste the essence of village life in every delicious bite!" </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img ">
      <img className="app_img" src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;