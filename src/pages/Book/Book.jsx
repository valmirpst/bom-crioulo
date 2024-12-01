import styles from "./Book.module.css";
import { TitleContainer } from "../../components/TitleContainer";

export default function Book() {
  return (
    <main className={styles.BookContainer}>
      <TitleContainer>
        <h2 className={styles.title}>Livro e Autor</h2>
        <img src="book.png" alt="" />
      </TitleContainer>
      <h3 className={styles.subtitle}>Livro</h3>
      <div className={styles.bookDescriptionContainer}>
        <p className={styles.paragraph}>
          "Bom-Crioulo" é um romance publicado em 1895 pelo autor brasileiro
          Adolfo Caminha. A obra é notável por ser um dos primeiros romances a
          tratar da homossexualidade de forma explícita na literatura
          brasileira, um tema altamente controverso para a época. O enredo gira
          em torno de Amaro, um ex-escravo e marinheiro, e sua relação amorosa e
          complexa com Aleixo, um jovem grumete. A história se desenrola no Rio
          de Janeiro do final do século XIX, período marcado pelo fim da
          escravidão em 1888 e pela transição política que culminou na
          Proclamação da República em 1889. A narrativa é caracterizada pelo
          realismo do naturalismo, onde os personagens são influenciados pelo
          ambiente e pelas circunstâncias sociais. Amaro enfrenta a realidade do
          racismo e da marginalização, enquanto sua relação com Aleixo reflete a
          busca por afeto em um mundo hostil. O ambiente marítimo serve como um
          microcosmo da sociedade, com sua hierarquia rígida e moral estrita.
        </p>
        <img src="bom-crioulo.jpg" alt="" />
      </div>

      <h3 className={styles.subtitle}>Autor</h3>
      <div className={styles.bookDescriptionContainer}>
        <p className={styles.paragraph}>
          Adolfo Caminha (1867–1900) foi um escritor e jornalista brasileiro,
          destacado no naturalismo e realismo literário. Nascido em Fortaleza,
          viveu durante transformações como a abolição da escravatura e a
          Proclamação da República. Embora tenha formado em Direito, se dedicou
          ao jornalismo e à literatura, principalmente no Rio de Janeiro.
          Caminha é conhecido por obras como <b>O Bom Crioulo</b>, que abordam
          temas polêmicos, como homossexualidade, marginalização social e
          violência urbana. Seus livros, como <b>A Normalista</b> e{" "}
          <b>Na Capital</b>, exploram os dilemas do Brasil pós-abolição, com uma
          abordagem realista e direta, inspirada por escritores como{" "}
          <b>Émile Zola</b> Sua produção literária foi curta, mas influente,
          destacando-se pela crítica social e pela exploração da sexualidade e
          das desigualdades. Morreu precocemente aos 33 anos, mas sua obra
          continua relevante na literatura brasileira.
        </p>
        <img src="Adolfo_Caminha_.jpg" alt="" />
      </div>
    </main>
  );
}
