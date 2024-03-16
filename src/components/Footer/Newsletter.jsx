import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Food Village" />
      <h1 className="headtext__cormorant">Join To our whatsapp group</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your mobile number" />
      <button type="button" className="custom__button">Join</button>
    </div>
  </div>
);

export default Newsletter;