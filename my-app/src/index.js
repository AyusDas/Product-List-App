import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Cart from './pages/cart';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

const rootElement = document.getElementById('root');
ReactDOM.render(<RouterProvider router={router} />,rootElement);
