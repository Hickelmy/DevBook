import React, { useState } from "react";

import { Sidebar } from "primereact/sidebar";

import { Button } from "primereact/button";

export const MenuSidebar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h1 style={{ fontWeight: "normal" }}>Sidebar</h1>
        <Button
          type="button"
          onClick={(e) => setVisible(false)}
          label="Save"
          className="p-button-success"
          style={{ marginRight: ".25em" }}
        />
        <Button
          type="button"
          onClick={(e) => setVisible(false)}
          label="Cancelar"
          className="p-button-secondary"
        />
      </Sidebar>

      <Button
        label=""
        className="p-button p-component p-button-outlined p-button-secondary"
        icon="pi pi-barspi pi-bars"
        iconPos="right"
        onClick={(e) => setVisible(true)}
      />
    </>
  );
};
