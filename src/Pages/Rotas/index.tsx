import React from "react";
import { BrowserRouter } from "react-router-dom";
import PagesRoutes from "./Routes";

const SmartFarmRoutes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <PagesRoutes />
      </BrowserRouter>
    </>
  );
};

export default SmartFarmRoutes;
