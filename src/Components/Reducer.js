export const initialState = {
    basket: []
    // user: null,

  };
  
  const reducer = (state, action) =>{
    console.log(action);
    switch (action.type) {
      case 'ADD_TO_BASKET':
        // Logic for adding item to basket 
        return {...state, basket: [...state.basket, action.item]
          
        };
        
      case 'REMOVE_FROM_BASKET':
        return { state};
        // Logic for removing item from basket
    
      default:
        return state;
    }
  }
  
  export default reducer;