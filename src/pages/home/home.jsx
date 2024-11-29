import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.alunos}>
        <img src="./alunos.png" alt="" />
      </div>
      <p className={styles.resume}>
      Bom Crioulo (1895), de Adolfo Caminha, foi uma das primeiras obras a retratar uma relação homoafetiva no Brasil, em um período em que tais temas eram praticamente inexistentes na literatura. A obra se destaca por abordar de forma aberta e inovadora a homossexualidade, desafiando os padrões da época.
      </p>
    </div>
  );
}
