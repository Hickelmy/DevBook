import styles from "./feed.modules.css";
import img1 from "../../assets/Images/img1.jpg";

export function Feed() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={img1} alt="" />
          <div className={styles.authorInfo}>
            <strong>Nome do Usuario</strong>
            <span>Profissão/Cargo</span>
          </div>
        </div>

        <time title="13 de Junho" dateTime="2022-06-13 08:00">
          Publicado ha{" "}
        </time>
      </header>

      <div>
        <p>Bom dia Pessoal,</p>
        <p>Alguem poderia me indicar um bom Livro para aprender React</p>
        <p>Obrigado pela ajuda</p>
        <p>
          <a href="">Perfil no github</a>{" "}
        </p>
      </div>
    </article>
  );
}
