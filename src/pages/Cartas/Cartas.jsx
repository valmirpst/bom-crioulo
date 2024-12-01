import styles from "./Cartas.module.css";
import { TitleContainer } from "../../components/TitleContainer";

export default function Cartas() {
  return (
    <main className={styles.BookContainer}>
      <TitleContainer>
        <h2 className={styles.title}>Cartas</h2>
        <img src="carta.svg" alt="" />
      </TitleContainer>
    </main>
  );
}
