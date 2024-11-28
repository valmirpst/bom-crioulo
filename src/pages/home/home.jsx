import Menu from "../../components/menu";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.left_side}>
        <h1 className={styles.title}>Trabalho de Português</h1>
        <Menu />
      </section>

      <div className={styles.descriptionContainer}>
        <div className={styles.alunos}>
          <img src="./alunos.png" alt="" />
        </div>
        <p className={styles.resume}>
          Bom Crioulo (1895), de Adolfo Caminha, retrata a relação entre Amaro,
          um marinheiro negro, e Aleixo, um jovem branco, abordando racismo e
          homoafetividade em uma sociedade marcada pela desigualdade.
        </p>
      </div>
    </main>
  );
}
