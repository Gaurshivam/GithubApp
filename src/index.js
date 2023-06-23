import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { CustomProvider } from './Context/CustomProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CustomProvider>
    <ChakraProvider>
    <App />
  </ChakraProvider>
  </CustomProvider>
    
);