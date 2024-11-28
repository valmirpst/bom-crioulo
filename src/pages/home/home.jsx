import Menu from "../../components/menu";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.left_side}>
        <h1 className={styles.title}>Trabalho de Português</h1>
        <Menu />
      </section>
    </main>
  );
}
