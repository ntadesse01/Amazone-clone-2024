import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue(); 
  console.log(basket);

  return (
    <div className='checkout'>
      <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
      <h1>
        Test
      </h1>
    </div>
  );
}

export default Checkout;
