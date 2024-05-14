import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home"
import Checkout from "./Components/Checkout"
// import Login from "./Components/Login"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<h1>Login page</h1>} />
          {/* Default route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// // function App() {function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//         <Route path="/checkout"> 
//         <Header/>
//         <Checkout />
//         <h1>Checkout</h1>
//         </Route>
//           <Route path="/login">  
//           <h1>Login page</h1>
//           </Route>
//           {/* this is the default route */}
//           <Route path="/">  
//           <Header/>
//           <Home />
//           </Route>
          
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;