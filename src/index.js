import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './Components/serviceWorker';
import { StateProvider } from './Components/StateProvider';
import reducer, { initialState } from './Components/Reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// eslint-disable-next-line
serviceWorker.register();