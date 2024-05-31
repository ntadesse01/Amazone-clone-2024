import React from 'react';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer'; // Assuming getBasketTotal is correctly implemented in Reducer.js

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" /> This order contains a gift
            </small>  
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Using getBasketTotal to calculate the total
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className=''>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
