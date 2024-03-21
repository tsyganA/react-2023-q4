import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/app/App.tsx';
import './index.css';
// import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.js';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <React.StrictMode>
    {/* <App /> */}
    {/* <ErrorBoundary> */}
      <RouterProvider router={router} />
    {/* </ErrorBoundary> */}
  </React.StrictMode>
  </Provider>
);
