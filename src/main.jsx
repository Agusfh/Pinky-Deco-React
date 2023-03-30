import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyCSeoUsY7BPP-Ox7YHLvoTU3HIK8t1Nr3Q",

  authDomain: "pinky-deco-react-coder.firebaseapp.com",

  projectId: "pinky-deco-react-coder",

  storageBucket: "pinky-deco-react-coder.appspot.com",

  messagingSenderId: "406601969169",

  appId: "1:406601969169:web:080e74aaf0ee23392dcbb0"

};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />

  </React.StrictMode>,
)
