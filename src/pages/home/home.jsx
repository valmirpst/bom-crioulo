import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.left_side}>
        <h1>Trabalho de Português</h1>
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
      </section>
      <section>Home</section>
    </main>
  );
}
