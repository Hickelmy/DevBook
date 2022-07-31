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
          label="Cancel"
          className="p-button-secondary"
        />
      </Sidebar>

      <Button icon="pi pi-arrow-right" onClick={(e) => setVisible(true)} />
    </>
  );
};
