import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./store/counterSlice";
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

