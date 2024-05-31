import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { StateProvider } from './Components/StateProvider';
import reducer, { initialState } from './Components/Reducer';

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./Components/serviceWorker.js')
        .then(function(registration) {
          console.log("ServiceWorker registration successful with scope:", registration.scope);
        })
        .catch(function(err) {
          console.log("ServiceWorker registration failed:", err);
        });
    });
  }
}

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

register();