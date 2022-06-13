import React from "react";
import styles from "./Sidebar.module.css";
import imgBackground from "../../assets/Images/VerdeGreen.png";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={imgBackground} className={styles.cover} alt="" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/Hickelmy.png" />
        <strong>Nome Usuario</strong>
        <span>Cargo Atual</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil <PencilLine />{" "}
        </a>
      </footer>
    </aside>
  );
}
