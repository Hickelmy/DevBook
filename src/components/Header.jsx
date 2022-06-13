import styles from "./header.module.css";
import ebookLogo from "../assets/logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={ebookLogo} alt="" />
    </header>
  );
}
