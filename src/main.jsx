import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./Layout/Error";
import Home from "./Components/Home/Home";
import MainLayout from "./Layout/MainLayout";
import Donation from "./Components/Donation/Donation";
import Statistics from "./Components/Statistics/Statistics";
import DonationDetails from "./Components/Donation/DonationDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donation /> ,
      },
      {
        path: "/statistics",
        element: <Statistics /> ,
        loader: ()=>fetch('/donation.json')
      },
      {
        path: "/donationDetails/:id",
        element: <DonationDetails />,
        loader: ()=>fetch('/donation.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
