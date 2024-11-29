import styles from "./menu.module.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <section className={styles.left_side}>
      <h1 className={styles.title}>Trabalho de Português</h1>
      <nav className={styles.navigation}>
        <button className={styles.button}>
          <img src="./utfpr-logo.png" alt="image" />
          <span className={styles.button_title}>Instituição</span>
        </button>
        <button className={styles.button}>
          <img src="./personagens-icon.png" alt="image" />
          <span className={styles.button_title}>Personagens</span>
        </button>
        <NavLink to="/book" className={`${styles.button} ${styles.book}`}>
          <img src="./book.png" alt="image" />
          <span className={styles.button_title}>Livro e Autor</span>
        </NavLink>
      </nav>
    </section>
  );
}
