import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyBAf91PvyS99juiWhnwqI2NUka2s_xxVJ4",
  authDomain: "landucci38095.firebaseapp.com",
  projectId: "landucci38095",
  storageBucket: "landucci38095.appspot.com",
  messagingSenderId: "491841014550",
  appId: "1:491841014550:web:6d58c7119f693b0ac49e37"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



