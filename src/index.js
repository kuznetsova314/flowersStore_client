import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import App from './App';
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import ReviewStore from "./store/ReviewStore";
import BasketStore from './store/BasketStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(), 
    product: new ProductStore(), 
    review: new ReviewStore(), 
    basket: new BasketStore()}}
  >
    <App />
  </Context.Provider>
    
);

