import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'; // Ass
// import SecondaryHeader from './SecondaryHeader';
 
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
            dispatch({
                type: "EMPTY_BASKET",
            });
        }
    };

    return (
        <nav className='header'>
            {/* Logo on the left */}
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt=""/>
            </Link>

  
            <div className='header__search'>
                
            <select className='headerdrop__down'  >  
        <option value="all-departments">All Departments</option>
        <option value="search-alias=alexa-skills">Alexa Skills</option>
        <option value="search-alias=amazon-devices">Amazon Devices</option>
        <option value="search-alias=amazonfresh">Amazon Fresh</option>
        <option value="option-3">Option 3</option>
        <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
        <option value="search-alias=amazon-restaurant">Amazon Restaurant</option>
        <option value="search-alias=amazon-supplies">Amazon Supplies</option>
        <option value="search-alias=amazon-today">Amazon Today</option>
        <option value="search-alias=amazon-toys">Amazon Toys</option>
        <option value="search-alias=amazon-vapes">Amazon Vapes</option>
        <option value="search-alias=appliances">Appliances</option>
        <option value="search-alias=apparel">Apparel</option>
        <option value="search-alias=baby">Baby</option>
        <option value="search-alias=beauty">Beauty</option>
        <option value="search-alias=beauty-supplies">Beauty Supplies</option>
        <option value="search-alias=bedding">Bedding</option>
        <option value="search-alias=books">Books</option>
        <option value="search-alias=cds-vinyl">CDS & Vinyl</option>


    </select>
                <input type='text' className='header__searchInput'/>
                <SearchIcon className='header__searchIcon' />
            </div>

        

            {/* Navigation links */}
            <div className='header__nav'>
                <Link to={!user && "/login"} className='header__link'>
                    <div onClick={login} className='header__option'>
                        <span className='header__optionLineOne'>Hello {user?.email}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
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
                    <ShoppingBasketIcon />
                    {/* number of items in the basket */}
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
            </Link>
            {/* <SecondaryHeader /> */}
        </nav>
    );
}

export default Header;
