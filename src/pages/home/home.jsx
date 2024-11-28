import Menu from "../../components/menu";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.left_side}>
        <h1>Trabalho de Português</h1>
        <Menu />
      </section>
      <section>Home</section>
    </main>
  );
}
