import React from "react";
import styles from "./app.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Feed />
        </main>
      </div>
    </div>
  );
}

export default App;
