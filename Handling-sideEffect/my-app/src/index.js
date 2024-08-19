import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FetchData, ExternalEvent } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchData />
    <ExternalEvent />
  </React.StrictMode>
);

