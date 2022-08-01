import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
// import logo from "../../Assets/pepperoni.svg";
import logo1 from "../../Assets/DEVBOOK.png";
// import { css, jsx } from "@emotion/core";
import CSS from "csstype";
import { MenuSidebar } from "../Sidebar";
import { items } from "../../Constants/MenuBarConstants";

// const logoStyle: CSS.Properties = {
//   textAlign: "center",
// };
export const MenuBar = () => {
  const start = (
    <div>
      <a href="">
        <img
          alt="logo"
          src={logo1}
          onError={(e) =>
            ((e.target as HTMLSourceElement).src =
              "https://cdn3.iconfinder.com/data/icons/toolbar-people/512/user_error_man_male_profile_warning-512.png")
          }
          height="40"
          className="mr-2"
        ></img>
      </a>
    </div>
  );
  const end = (
    <div>
      {" "}
      <InputText placeholder="Procurar.." type="text" />{" "}
      <Button label="Login" icon="pi pi-user" />
    </div>
  );

  return (
    <>
      <Menubar
        model={items}
        start={start}
        end={end}
        className="font-bold text-white m-2 px-5 py-3"
      />
    </>
  );
};
