

export const initialState = {
  basket: [
    {
      id: "12321341",
      title: "The Software Engineer's Guidebook: Navigating senior, tech lead, and staff engineer positions at tech companies and startups",
      price: 25.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61vZlI3gBtL._AC_UY218_.jpg"
    },
    {
      id: "12748488",
      title: "Bethany Housewares Teflon Grill",
      price: 169.95,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/714QcBlfT4L._AC_SX450_.jpg"
    }
    
  ],
  user: null
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => amount + item.price, 0); 


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
       ...state,
        user: action.user,
      };
    case 'ADD_TO_BASKET':
      // Logic for adding item to basket 
      return { ...state, basket: [...state.basket, action.item] };

    case 'REMOVE_FROM_BASKET':
      // Logic for removing item from basket....
      // WE CLONED THE BASKET 
      let newBasket = [...state.basket]
      // WE CHECK TO SEE IF PRODUCT EXISTS,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id)
      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1)
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in basket!`)
      }
      return {...state, basket: newBasket };
         
    default:
      return state;
  }
}

export default reducer;
