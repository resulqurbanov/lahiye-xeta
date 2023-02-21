import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/ReduxRedia';



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>

    <App />

  </Provider>,
);
