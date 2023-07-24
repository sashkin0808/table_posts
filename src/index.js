import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { store } from './store/store';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='table_posts'>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);