import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../../App';
import root from './root';
import Home from '../Pages/Home';
import Donation from '../Pages/Donation';
import Dashboard from '../Pages/Dashboard';
import Contacts from '../Pages/Contacts';
import ErrorPage from '../ErrorPage/ErrorPage';
import CampaignDetails from '../Pages/Campaigns/CampaignDetails';
import Login from '../Authentication/Login/Login';
import AuthLayout from '../Authentication/AuthLayout';
import Register from '../Authentication/Register/Register';
import Forget from '../Authentication/Login/Forget';
import Private from './Private';
import Update from '../Authentication/Login/Update';

const router = createBrowserRouter([
  {
    path: "/",
    Component: root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: async () => {
          const res = await fetch("/cloth.json");
          const data = await res.json();
          return data;
        }
      },
      {
        path: "/donation/:id",
        element: <Private><CampaignDetails /></Private>,
        loader: async ({ params }) => {
          const res = await fetch("/cloth.json");
          const allData = await res.json();
          return allData.find(data => data.id == params.id)
        }
      },
      {
        path: "/dashboard",
        element: <Private><Dashboard /></Private>,
      },
      {
        path: "/contacts",
        Component: Contacts
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path : "/auth/login",
        Component : Login
      },
      {
        path : "/auth/forget/password",
        Component : Forget
      },
      {
        path : "/auth/register",
        Component : Register
      },
      {
        path : "/auth/update-profile",
        element: <Private><Update /></Private>,
      },
    ]
  }
]);

export default router;