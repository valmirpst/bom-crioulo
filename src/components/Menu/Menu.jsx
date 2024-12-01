import { useAppContext } from "../../context/AppContext";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const { activePage, setActivePage } = useAppContext();

  return (
    <section className={styles.left_side}>
      {activePage === "home" && (
        <h1 className={styles.title}>Trabalho de Português</h1>
      )}

      <nav
        className={`${styles.navigation} ${
          activePage !== "home" && styles.natigationActive
        }`}
      >
        {activePage !== "home" && (
          <>
            <NavLink
              to="/alunos"
              className={`${styles.button} ${
                activePage === "alunos" ? styles.buttonActive : ""
              }`}
              onClick={() => setActivePage("alunos")}
            >
              <img src="./alunos.png" alt="image" />
              <span className={styles.button_title}>Alunos</span>
            </NavLink>
            <NavLink
              to="/cartas"
              className={`${styles.button} ${
                activePage === "cartas" ? styles.buttonActive : ""
              }`}
              onClick={() => setActivePage("cartas")}
            >
              <img src="./carta.svg" alt="image" className={styles.cartaImg} />
              <span className={styles.button_title}>Cartas</span>
            </NavLink>
          </>
        )}

        <NavLink
          to="/universidade"
          className={`${styles.button} ${
            activePage === "universidade" ? styles.buttonActive : ""
          }`}
          onClick={() => setActivePage("universidade")}
        >
          <img src="./utfpr-logo.png" alt="image" />
          <span className={styles.button_title}>Instituição</span>
        </NavLink>

        <NavLink
          to="/personagens"
          className={`${styles.button} ${
            activePage === "personagens" && styles.buttonActive
          }`}
          onClick={() => setActivePage("personagens")}
        >
          <img src="./personagens-icon.png" alt="image" />
          <span className={styles.button_title}>Personagens</span>
        </NavLink>

        <NavLink
          to="/book"
          className={`${styles.button} ${styles.book} ${
            activePage === "book" && styles.buttonActive
          }`}
          onClick={() => setActivePage("book")}
        >
          <img src="./book.png" alt="image" />
          <span className={styles.button_title}>Livro e Autor</span>
        </NavLink>
      </nav>
    </section>
  );
}
