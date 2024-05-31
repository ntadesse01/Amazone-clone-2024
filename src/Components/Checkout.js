import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import ShareLayout from "./ShareLayout";

function Checkout() {
  const [{ basket }] = useStateValue();
  const basketLength = basket?.length;

  return (
    <ShareLayout>  
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          {/* <h2 className="checkout__title">Your shopping basket has {basketLength} items</h2> */}
          {basketLength === 0 && (
            <div>
              <h2>Your shopping basket is empty</h2>
              <p>You have no items in your basket. To buy one or more items, click "Add to Basket" next to the item.</p>
            </div>
          )}
          {basketLength > 0 && (
            <div>
              {/* Checkout Product */}
              <h2 className="checkout__title">Your shopping basket has {basketLength} items</h2>
              {/* List out all of the checkout products */}
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
          {basketLength > 0 && (
            <div className="checkout__right">
              <Subtotal />
            </div>
          )}
        </div>
      </div>
    </div>
    </ShareLayout>
  );
}

export default Checkout;