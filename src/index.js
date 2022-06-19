import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './context/AuthContext';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </ChakraProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
