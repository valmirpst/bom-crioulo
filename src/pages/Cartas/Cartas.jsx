import styles from './Cartas.module.css';
import { TitleContainer } from '../../components/TitleContainer';

export default function Cartas() {
  return (
    <main className={styles.BookContainer}>
      <TitleContainer>
        <h2 className={styles.title}>Cartas</h2>
        <img src="carta.svg" alt="" />
      </TitleContainer>

      <div className={styles.cartaContainer}>
        <p className={styles.author} >Carta escrita por Bom Crioulo enviada à Aleixo</p>
        <p className={styles.content}>
          Meu querido Aleixo, <br />
          Desde que nossos caminhos se separaram, sinto tua ausência como um eco
          constante na minha alma. Não há um dia em que o pensamento de ti não
          me acompanhe, lembrando-me do que fomos e do que ainda somos. <br />
          Tu és o silêncio que me acalma e a tempestade que me toma. Quando
          estamos juntos, o mundo parece desaparecer, e o que sinto por ti vai
          além do desejo. É algo profundo, que não posso explicar, apenas
          sentir. <br />
          Cada dia sem ti é uma luta para encontrar paz. Teu nome ressoa em
          minha mente como uma melodia, e a saudade de ti é uma constante.
          <br />
          Mesmo que os ventos da vida nos afastem, sei que o que sentimos é mais
          forte que qualquer obstáculo. O que desejo é que nossas almas se
          encontrem sem barreiras, porque só assim estarei inteiro. <br />
          Com amor eterno e sem fim, <br />
          Teu Bom Crioulo
        </p>
      </div>

      <div className={styles.cartaContainer}>
        <p className={styles.author}>Carta escrita por Aleixo enviada à Bom Crioulo</p>
        <p className={styles.content}>
          Meu caro Amaro, <br />
          Espero que esta carta te encontre em boa saúde e serenidade. Por aqui,
          tudo segue tranquilo, ainda que a saudade da tua presença pese em meu
          coração. Apesar disso, posso te assegurar que Carolina tem cuidado de
          mim com atenção e generosidade que muito me confortam. Sei que nossas
          separações nunca foram fáceis, mas a vida, como sabes, traz mudanças
          inevitáveis. Carolina tem sido um grande amparo, e sou grato por sua
          dedicação e amizade. <br />
          Quanto a mim, não te preocupes. Ainda que a
          distância seja desafiadora, aceito que faz parte do caminho que
          escolhemos seguir. Desejo que teus dias sejam leves e plenos de paz.
          Não deixes que o silêncio nos afaste, pois, no fundo, a vida sempre
          encontra um jeito de nos aproximar, mesmo que de outras formas. <br />
          Com estima, <br />
          Aleixo
        </p>
      </div>

      <div className={styles.cartaContainer}>
        <p className={styles.author}>Carta escrita por Carolina enviada à Bom Crioulo</p>
        <p className={styles.content}>
          Meu caro Amaro, <br />
          Espero que esta carta te encontre bem, onde quer que estejas. Por
          aqui, as coisas seguem tranquilas, como sempre. Aleixo está em boa
          companhia, disso podes ter certeza. Ele parece cada vez mais
          confortável e feliz, quase como se tivesse encontrado um novo lar.
          Cuido para que nada lhe falte — alimentação, abrigo... e, é claro, um
          pouco de atenção, que ele tanto merece. <br />
          O rapaz tem se mostrado tão doce e agradecido; é impossível não querer
          o melhor para ele. Às vezes, ele olha para mim com aquela expressão de
          quem encontrou algo especial, algo que talvez não soubesse que
          procurava. Mas não te preocupes, Amaro, sei que confias em mim. <br />
          A casa está mais cheia com sua presença, mais viva, mais... calorosa,
          diria. Não imaginas como é bom ter alguém por perto para dividir as
          noites longas e os dias ensolarados. Ele é uma companhia tão
          agradável, de um jeito que talvez tenhas esquecido de notar. <br />
          Desejo-te sorte e que teus dias sejam leves. Aqui, tudo está
          exatamente como deveria estar. <br />
          Com estima, <br />
          Carolina
        </p>
      </div>
    </main>
  );
}
