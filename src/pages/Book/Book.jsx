import { NavLink } from "react-router-dom";
import styles from "./Book.module.css";

export default function Book() {
  return (
    <main className={styles.BookContainer}>
      <div className={styles.titleContainer}>
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={styles.arrowIcon}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </NavLink>
        <h2 className={styles.title}>Livro e Autor</h2>
        <img src="book.png" alt="" />
      </div>

      <h3 className={styles.subtitle}>Livro</h3>
      <div className={styles.bookDescriptionContainer}>
        <p className={styles.paragraph}>
          "Bom-Crioulo" é um romance publicado em 1895 pelo autor brasileiro
          Adolfo Caminha. A obra é notável por ser um dos primeiros romances a
          tratar da homossexualidade de forma explícita na literatura brasileira,
          um tema altamente controverso para a época. O enredo gira em torno de
          Amaro, um ex-escravo e marinheiro, e sua relação amorosa e complexa com
          Aleixo, um jovem grumete. A história se desenrola no Rio de Janeiro do
          final do século XIX, período marcado pelo fim da escravidão em 1888 e
          pela transição política que culminou na Proclamação da República em
          1889. A narrativa é caracterizada pelo realismo do naturalismo, onde os
          personagens são influenciados pelo ambiente e pelas circunstâncias
          sociais. Amaro enfrenta a realidade do racismo e da marginalização,
          enquanto sua relação com Aleixo reflete a busca por afeto em um mundo
          hostil. O ambiente marítimo serve como um microcosmo da sociedade, com
          sua hierarquia rígida e moral estrita.
        </p>
        <img src="bom-crioulo.jpg" alt="" />
      </div>
    </main>
  );
}
