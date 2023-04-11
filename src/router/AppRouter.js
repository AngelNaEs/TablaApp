import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { AppRoutes } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};
