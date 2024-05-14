import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();
    console.log(basket);
  return (
    <nav className='header'>
      {/* Logo on the left */}
      <Link to="/">
        <img className="header_logo" src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt=""/>
      </Link>

      {/* Search box */}
      <div className='header__search'>
        <input type='text' className='header__searchInput'/>
        <SearchIcon className='header__searchIcon' />
      </div>

      {/* Navigation links */}
      <div className='header__nav'>
        <Link to="/login" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>
      </div>

      <div className='header__nav'>
        <Link to="/login" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
      </div>

      <div className='header__nav'>
        <Link to="/login" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className='header__link'>
        <div className='header__optionBasket'>
            {/* Shopping basket icon */}
            <ShoppingBasketIcon/>
            {/* number of items in the basket */}
            <span className='header__optonLineTwo header__basketCount'>{basket?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
