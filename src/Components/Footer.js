import React from 'react';
import './Footer.css';
import { StateProvider } from './StateProvider';

const Footer = () => {
  return (
    <StateProvider>
      <footer>
        <div className="footer-top">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">About Amazon</a>
            <a href="#">Investor Relations</a>
            <a href="#">Amazon Devices</a>
          </div>
          <div className="footer-column">
            <h3>Make Money with Us</h3>
            <a href="#">Sell on Amazon</a>
            <a href="#">Sell Your Services on Amazon</a>
            <a href="#">Sell on Amazon Business</a>
            <a href="#">Sell Your Apps on Amazon</a>
            <a href="#">Become an Affiliate</a>
          </div>
          
          <div className="footer-column">
            <h3>Amazon Payment Products</h3>
            <a href="#">Amazon Visa</a>
            <a href="#">Amazon Secured Card</a>
            <a href="#">Amazon Business Card</a>
            <a href="#">Shop with Points</a>
            <a href="#">Credit cared Marketplace</a>
            <a href="#">Reload Your Balance</a>
            <a href="#">Gift Careds</a>
            <a href="#">Amazon Currency Converter</a>
          </div>
          
          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <a href="#">Your Account</a>
            <a href="#">Your Orders</a>
            <a href="#">Shipping Rates and Policies</a>
            <a href="#">Amazon Prime</a>
            <a href="#">Returns &Replacments</a>
            <a href="#">Manage Your Content and Devices</a>
            <a href="#">Recalls and Product Safety Alerts</a>
            <a href="#">Help</a>
          </div>
          {/* Add more columns as needed */}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Amazon Clone. All rights reserved.</p>
        </div>
      </footer>
    </StateProvider>
  );
};

export default Footer;
