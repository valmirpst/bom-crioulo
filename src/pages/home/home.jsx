import { NavLink } from 'react-router-dom';
import styles from './home.module.css';
import { useAppContext } from '../../context/AppContext';

export default function Home() {
  const { setActivePage } = useAppContext();

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.rightMenu}>
        <NavLink
          to="/alunos"
          className={styles.alunos}
          onClick={() => setActivePage('alunos')}
        >
          <img src="./alunos.png" alt="" />
        </NavLink>

        <NavLink to="/cartas" onClick={() => setActivePage('alunos')}>
          <img src="./carta.svg" alt="" className={styles.carta} />
        </NavLink>
      </div>
    </div   >
  );
}
