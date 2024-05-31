
 

// it is like creating global variables that can be passed around in a React App. instead of passing props from grandparent to parent to child, and so on right?

// setup data layer
import React, { createContext, useContext, useReducer } from 'react';
import Footer from './Footer';
 

//this is the data layer

export const StateContext = createContext();

//build a provider  
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        {Footer}
    </StateContext.Provider>
    
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);

