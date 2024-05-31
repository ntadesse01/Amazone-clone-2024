import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
    const[{basket}, dispatch] = useStateValue();
    console.log (id, title, image, price, rating)
    const removeFromeBasket = () => {
        // remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
        console.log("Remove from basket")
    }
  return (
    <div className='CheckoutProduct'>
      <img className="CheckoutProduct__image"src={image} alt=''/>
 
      <div className='CheckoutProduct__info'>
        <p className='CheckoutProduct__title'>{title}</p>
        <p className='CheckoutProduct__price'>
            
          <small>$</small>
          <strong>{price}</strong>
          <small>$</small>

        </p>
        <div className='CheckoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromeBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
