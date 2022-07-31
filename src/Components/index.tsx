import React from "react";
import { MenuBar } from "../Components/MenuBar";
import { MenuSidebar } from "../Components/Sidebar";
// import { useStyles } from "./styles";

// const classes = useStyles();

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <MenuBar />

      <main>
        <div />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
