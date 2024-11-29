import { NavLink } from 'react-router-dom';
import styles from './Universidade.module.css';

export default function Universidade() {
  return (
    <main className={styles.UniversidadeContainer}>
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

        <h2 className={styles.title}>Universidade Tecnológica Federal do Paraná</h2>
        {<img src="utfpr-logo.png" alt="" className={styles.universityLogo} /> }
      </div>

      <h3 className={styles.subtitle}>Sobre a UTFPR</h3>
      <div className={styles.descriptionContainer}>
        <p className={styles.paragraph}>
          A UTFPR (Universidade Tecnológica Federal do Paraná) é uma instituição pública federal, com sede em Curitiba,
          conhecida pela excelência acadêmica e foco em áreas tecnológicas. Originada do antigo  <b>CEFET</b>, oferece ensino de
          qualidade em diversos cursos, como Engenharia Civil e Ciência da Computação.
        </p>
        { <img src="UTFPR.png" alt="" className={styles.universityImage} /> }
        
      </div>

      <h3 className={styles.subtitle}>Câmpus de Campo Mourão</h3>
      <div className={styles.descriptionContainer}>
        <p className={styles.paragraph}>
          No câmpus de Campo Mourão, destaca-se o <b>Curso Técnico Integrado em Informática para a Internet</b>, com duração de
          quatro anos, que combina disciplinas do ensino médio e matérias específicas da área de TI, como programação e
          redes. Os alunos têm acesso a professores qualificados e laboratórios modernos, onde podem aplicar o
          conhecimento adquirido.
        </p>
        { <img src="fotosturma.jpg" alt="" className={styles.universityImage} /> }
      </div>

      <h3 className={styles.subtitle}>Infraestrutura e Mercado de Trabalho</h3>
      <div className={styles.descriptionContainer}>
        <p className={styles.paragraph}>
        A infraestrutura da UTFPR é constantemente atualizada para acompanhar as inovações tecnológicas, oferecendo aos estudantes ferramentas e recursos de alta qualidade. Com esse suporte, a universidade prepara os alunos para uma carreira bem-sucedida, seja no mercado de trabalho ou em cursos superiores, sempre com um forte vínculo com as necessidades da indústria.
        </p>
        { <img src="FotosCursos.jpeg" alt="" className={styles.universityImage} /> }
      </div>
     
    </main>
  );
}
