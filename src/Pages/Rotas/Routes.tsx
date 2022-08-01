import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Perfil } from "../Perfil";
import { DashboardLayout } from "../../Components/index";

const AppRoutes: React.FC = () => {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </DashboardLayout>
    </>
  );
};

export default AppRoutes;
