import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./routes/App.tsx";
import "./index.css";
import {ErrorPage} from "./ErrorPage.tsx";
import {Home} from "./routes/Home.tsx";
import {CustomDomain} from "./routes/CustomDomain.tsx";
import {Profile} from "./routes/Profile.tsx";
import {FAQs} from "./routes/FAQs.tsx";
import {QRCode} from "./routes/QRCode.tsx";
import {Analytics} from "./routes/Analytics.tsx";
import {SignUp} from "./routes/SignUp.tsx";
import {Login} from "./routes/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "custom-domain",
        element: <CustomDomain />,
      },
      {
        path: "faqs",
        element: <FAQs />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "qr-code",
        element: <QRCode />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
