import styles from './Alunos.module.css';
import { TitleContainer } from '../../components/TitleContainer';

export default function Alunos() {
  return (
    <main className={styles.AlunosContainer}>
      <TitleContainer>
        <h2 className={styles.title}>Alunos</h2>
        <img
          src="alunos.png"
          alt="Imagem de Alunos"
          className={styles.titleImage}
        />
      </TitleContainer>

      <div className={styles.student}>
        <h3 className={styles.subtitle}>Amanda Soares Vieira</h3>
        <div className={styles.descriptionContainer}>
          <p className={styles.paragraph}>
            Amanda é uma aluna extremamente organizada e focada em seu futuro.
            Ela é muito dedicada aos estudos e se preocupa com o impacto que
            suas escolhas podem ter no amanhã. Está sempre em busca de
            oportunidades para aplicar seus conhecimentos na prática,
            especialmente na área agrícola. Nos seus tempos livres, Amanda gosta
            de ir à área rural para descansar a cabeça e se reconectar com a
            natureza, algo que a ajuda a manter o equilíbrio e a clareza mental.
          </p>
          <img src="Amanda.jpeg" alt="" className={styles.studentImage} />
        </div>
      </div>

      <div className={styles.student}>
        <h3 className={styles.subtitle}>Lara Heloisa Deitos</h3>
        <div className={styles.descriptionContainer}>
          <p className={styles.paragraph}>
            Lara é uma aluna muito esforçada e determinada. Sua verdadeira
            paixão é a dança, desde pequena ela se dedicou intensamente a essa
            arte, equilibrando seus estudos com os ensaios e apresentações. Lara
            tem uma grande capacidade de interpretação e expressão, não só nos
            estudos acadêmicos, mas também no palco. Ela é uma pessoa criativa e
            sempre busca inovar, seja na dança ou nas suas abordagens
            acadêmicas, combinando técnica e emoção de forma única.
          </p>
          <img src="Lara.jpeg" alt="" className={styles.studentImage} />
        </div>
      </div>

      <div className={styles.student}>
        <h3 className={styles.subtitle}>Matheus Teodoro Garcia</h3>
        <div className={styles.descriptionContainer}>
          <p className={styles.paragraph}>
            Apaixonado por matemática e computação, Matheus se destaca por sua
            habilidade em resolver problemas complexos de maneira eficiente.
            Sempre em busca de novos desafios, ele adora explorar novas
            tecnologias e aplica seus conhecimentos criativamente em projetos de
            desenvolvimento e situações do cotidiano. Nos seus tempos livres,
            Matheus gosta de ir à academia, uma atividade que o ajuda a manter o
            corpo saudável e equilibrado, além de trazer um momento de
            descontração em meio à sua rotina intensa.
          </p>
          <img src="Matheus.jpeg" alt="" className={styles.studentImage} />
        </div>
      </div>

      <div className={styles.student}>
        <h3 className={styles.subtitle}>Natália Campos Soares</h3>
        <div className={styles.descriptionContainer}>
          <p className={styles.paragraph}>
            Natália é uma excelente aluna, conhecida por sua responsabilidade e
            dedicação aos estudos. Ela se destaca em resolver problemas
            desafiadores, sempre com uma abordagem estratégica. Tem um enorme
            compromisso com seu futuro, participando ativamente de competições
            acadêmicas e eventos da área. Nos seus momentos livres, Natália
            gosta de praticar boxe, uma atividade que a ajuda a manter o foco e
            a disciplina.
          </p>
          <img src="Nati.jpeg" alt="" className={styles.studentImage} />
        </div>
      </div>

      <div className={styles.student}>
        <h3 className={styles.subtitle}>Valmir Paiva Stachin</h3>
        <div className={styles.descriptionContainer}>
          <p className={styles.paragraph}>
            Valmir é um estudante apaixonado por computação e áreas de
            desenvolvimento. Ele tem um grande interesse por resolver problemas
            desafiadores. Nos seus momentos livres, Valmir gosta de se dedicar à
            academia e também aprecia correr ao ar livre, buscando manter o
            corpo saudável e equilibrado. Além disso, ele é fã de esportes ao ar
            livre, como trilhas, sempre em busca de novas aventuras e desafios.
          </p>
          <img src="Valmir.jpeg" alt="" className={styles.studentImage} />
        </div>
      </div>
    </main>
  );
}
