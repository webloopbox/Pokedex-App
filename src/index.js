import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import pokeReducer from './pokedex'

const store = configureStore({
  reducer: { poke: pokeReducer },
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);