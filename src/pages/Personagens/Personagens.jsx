import { NavLink } from 'react-router-dom';
import styles from './Personagens.module.css';

export function Personagens() {
  return (
    <main className={styles.PersonagensContainer}>
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

        <h1 className={styles.title}>Personagens</h1>
      </div>

      <p className={styles.subtitle}>Bom Criolo</p>
      <div className={styles.descriptionContainer}>
        <p className={styles.paragraph}>O personagem Bom Criolo...</p>
        <img src="Amaro.jpg" alt="Amaro" className={styles.personagemImage} />
      </div>

      <p className={styles.subtitle}>Aleixo</p>
      <div className={styles.descriptionContainer}>
        <p className={styles.paragraph}>Aleixo...</p>
        <img src="Aleixo.jpg" alt="Aleixo" className={styles.personagemImage} />
      </div>

      <p className={styles.subtitle}>Carolina</p>
      <div className={styles.descriptionContainer}>
        <p className={styles.paragraph}>Carolina...</p>
        <img src="Carolina.png" alt="Carolina" className={styles.personagemImage} />
      </div>
    </main>
  );
}
