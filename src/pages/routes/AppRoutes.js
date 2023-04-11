import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout, Home } from "../";

export const AppRoutes = () => {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      <Route path="/" element={loadLayout(AppLayout, Home)} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
