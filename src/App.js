import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Landing from './Components/Landing';
import { useStateValue } from './Components/StateProvider';
import { auth } from './Components/firebase';

function App() {
  const [{ basket }, dispatch] = useStateValue();

  // useEffect: POWERFUL
  // PIECE OF CODE WHICH RUNS BASED ON A GIVEN CONDITION
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      // Cleanup function
      unsubscribe();
    };
  }, [dispatch]);
console.log("USER IS >>>>>>".user)
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          {/* Default route */}
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
