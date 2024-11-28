import styles from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.navigation}>
      <button>
        <img src="./utfpr-logo.png" alt="image" />
        <span className={styles.button_title}>Instituição</span>
      </button>
      <button>
        <img src="./personagens-icon.png" alt="image" />
        <span className={styles.button_title}>Personagens</span>
      </button>
      <button className={styles.book}>
        <img src="./book.png" alt="image" />
        <span className={styles.button_title}>Livro e Autor</span>
      </button>
    </nav>
  );
}
