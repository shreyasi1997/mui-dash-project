// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import graphReducer from '../features/graphSlice'; 

const store = configureStore({
  reducer: {
    user: userReducer,
    graph: graphReducer, 
  },
});

export default store;
