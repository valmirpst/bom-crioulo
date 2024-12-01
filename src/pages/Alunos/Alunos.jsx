import styles from "./Alunos.module.css";
import { TitleContainer } from "../../components/TitleContainer";

export default function Alunos() {
  return (
    <main className={styles.BookContainer}>
      <TitleContainer>
        <h2 className={styles.title}>Alunos</h2>
        <img src="alunos.png" alt="" />
      </TitleContainer>
    </main>
  );
}
