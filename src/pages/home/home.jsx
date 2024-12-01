import { NavLink } from "react-router-dom";
import styles from "./home.module.css";
import { useAppContext } from "../../context/AppContext";

export default function Home() {
  const { setActivePage } = useAppContext();

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.rightMenu}>
        <NavLink
          to="/alunos"
          className={styles.alunos}
          onClick={() => setActivePage("alunos")}
        >
          <img src="./alunos.png" alt="" />
        </NavLink>

        <NavLink to="/cartas" onClick={() => setActivePage("alunos")}>
          <img src="./carta.svg" alt="" className={styles.carta} />
        </NavLink>
      </div>
      <p className={styles.resume}>
        Bom Crioulo (1895), de Adolfo Caminha, foi uma das primeiras obras a
        retratar uma relação homoafetiva no Brasil, em um período em que tais
        temas eram praticamente inexistentes na literatura. A obra se destaca
        por abordar de forma aberta e inovadora a homossexualidade, desafiando
        os padrões da época.
      </p>
    </div>
  );
}
