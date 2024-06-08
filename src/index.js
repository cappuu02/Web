import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Store from './Pages/Store';
import Login from './Pages/Login';
import Profile_Account from './Pages/Profile_Account';
import Profile_Security from './Pages/Profile_Security';
import MissPassword from './components/MissPassword';
import Reset_Password from './Pages/Reset_Password';
import Profile_Orders from './Pages/Profile_Orders';
import Store_Lens from './Pages/Store_Lens';
import Store_Cameras from './Pages/Store_Cameras';
import Store_Accessori from './Pages/Store_Accessori';
import Cart from './components/Cart'; // Assicurati di avere l'importazione corretta del componente Cart
import { CartProvider } from './CartContext'; // Importa il CartProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Store",
    element: <Store />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Login/MissPassword",
    element: <MissPassword />,
  },
  {
    path: "/Login/Reset_Password",
    element: <Reset_Password />,
  },
  {
    path: "/Profile_Account",
    element: <Profile_Account />,
  },
  {
    path: "/Profile_Security",
    element: <Profile_Security />,
  },
  {
    path: "/Profile_Orders",
    element: <Profile_Orders />,
  },
  {
    path: "/Store_Lens",
    element: <Store_Lens />,
  },
  {
    path: "/Store_Cameras",
    element: <Store_Cameras />,
  },
  {
    path: "/Store_Accessori",
    element: <Store_Accessori />,
  },
  {
    path: "/Cart",
    element: <Cart />, // Assicurati di avere l'importazione corretta del componente Cart
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
