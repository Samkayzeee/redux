import React from 'react'
import ReactDOM from 'react-dom/client'
import { useSelector } from 'react-redux';
import App from './App'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './features/user';

const store = configureStore({
  reducer:{
    user: userSlice.reducer
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
        <App />
    </Provider>
  </React.StrictMode>,
)
