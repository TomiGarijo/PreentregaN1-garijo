import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCnyQhAOh-fYj7Fpkz20Y8whUu7xCLMyY",
  authDomain: "proyectofinal-b7916.firebaseapp.com",
  projectId: "proyectofinal-b7916",
  storageBucket: "proyectofinal-b7916.appspot.com",
  messagingSenderId: "626497402460",
  appId: "1:626497402460:web:e6001b226510e69ed99899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider><App /></ChakraProvider> 
)
