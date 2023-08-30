import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import { StoreProvider } from "./redux/StoreProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { MainLayout } from "./components/MainLayout/MainLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </StoreProvider>
  </React.StrictMode>
);
