
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { MusicLibraryProvider } from './MusicLibraryPage';
import './wavify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MusicLibraryProvider>
        <App />
      </MusicLibraryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
