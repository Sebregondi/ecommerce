import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyBAf91PvyS99juiWhnwqI2NUka2s_xxVJ4",
  authDomain: "landucci38095.firebaseapp.com",
  projectId: "landucci38095",
  storageBucket: "landucci38095.appspot.com",
  messagingSenderId: "491841014550",
  appId: "1:491841014550:web:6d58c7119f693b0ac49e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
