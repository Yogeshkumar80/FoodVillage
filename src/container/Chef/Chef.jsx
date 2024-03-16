import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse ">
      <img className='app_chef_img' src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img  src={images.quote} alt="quote_image" />
          <p className="p__opensans">In the kitchen, I serve happiness, infusing each dish with the essence of our village's bounty.</p>
        </div>
        <p className="p__opensans">With ingredients sourced from the heart of our villages, our chefs infuse every creation with the soulful essence of tradition and the artistry of a mother's touch.</p>
      </div>

      {/* <div className="app__chef-sign">
        <p>Yogesh Rajput</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt
        ="sign_image" />
      </div> */}
    </div>
  </div>
);

export default Chef;