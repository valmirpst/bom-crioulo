import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.alunos}>
        <img src="./alunos.png" alt="" />
      </div>
      <p className={styles.resume}>
        Bom Crioulo (1895), de Adolfo Caminha, retrata a relação entre Amaro, um
        marinheiro negro, e Aleixo, um jovem branco, abordando racismo e
        homoafetividade em uma sociedade marcada pela desigualdade.
      </p>
    </div>
  );
}
