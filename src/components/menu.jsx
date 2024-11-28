import styles from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.navigation}>
      <button>
        <img src="" alt="image" />
        <span className={styles.button_title}>Title</span>
      </button>
      <button>
        <img src="" alt="image" />
        <span className={styles.button_title}>Instituição</span>
      </button>
      <button>
        <img src="" alt="image" />
        <span className={styles.button_title}>Personagens</span>
      </button>
      <button>
        <img src="" alt="image" />
        <span className={styles.button_title}>Livro e Autor</span>
      </button>
    </nav>
  );
}
