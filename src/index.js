import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Store from './Pages/Store';
import Login from './Pages/Login';
import './Sign_inup.css';
import './index.css';
import Profile_Account from './Pages/Profile_Account';
import Profile_Security from './Pages/Profile_Security'
import MissPassword from './components/MissPassword';
import Reset_Password from './components/Reset_Password';

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
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
