import styles from "./Personagens.module.css";
import { TitleContainer } from "../../components/TitleContainer";

export function Personagens() {
  return (
    <main className={styles.PersonagensContainer}>
      <TitleContainer>
        <h1 className={styles.title}>Personagens</h1>
      </TitleContainer>

      <p className={styles.subtitle}>Bom-Crioulo</p>
      <div className={styles.descriptionContainer}>
        <p className={styles.paragraph}>
          Amaro é um personagem complexo que reflete as tensões sociais e
          emocionais de sua época. Ele é um ex-escravo, homem negro e
          marinheiro, cuja força física impressiona, mas que carrega em si
          profundas contradições e vulnerabilidades. O “Bom-crioulo” busca
          liberdade após sua fuga de uma fazenda onde sofreu com o trabalho
          escravo, encontrando no mar um refúgio e uma forma de reinventar sua
          identidade. <br /> Fisicamente, Amaro é descrito como robusto e
          imponente, com uma presença que transmite força e autoridade. No
          entanto, emocionalmente, ele é um homem intenso, marcado por um amor
          avassalador por Aleixo, o jovem grumete por quem se apaixona. Seu
          afeto pelo rapaz transcende os limites impostos pela sociedade da
          época, mas também se manifesta de forma possessiva, revelando traços
          de ciúme e insegurança. <br /> O Bom-crioulo é uma figura que desafia
          estereótipos, pois, ao mesmo tempo em que exibe traços de
          masculinidade tradicional, como a força e a coragem, demonstra uma
          sensibilidade e um desejo de afeto raramente associados a homens
          negros em narrativas do período. Sua história é uma mistura de força e
          fragilidade, liberdade e escravidão emocional, tornando-o um dos
          personagens mais marcantes do naturalismo brasileiro.
        </p>
        <img src="Amaro.jpg" alt="Amaro" className={styles.personagemImage} />
      </div>

      <p className={styles.subtitle}>Aleixo</p>
      <div className={styles.descriptionContainer}>
        <p className={styles.paragraph}>
          Aleixo é um jovem grumete branco, de traços delicados e beleza jovem
          que se destaca em contraste com a robustez de Amaro. Sua aparência é
          de uma suavidade que atrai, o que o torna, de imediato, um objeto de
          desejo, especialmente para Amaro, que se apaixona por ele de maneira
          intensa e possessiva. Aleixo possui uma pele clara e um rosto que
          lembra a juventude pura e quase ingênua, o que se reflete também em
          seu comportamento. <br />
          Em sua personalidade, Aleixo é marcado por uma certa inexperiência e
          vulnerabilidade, sendo facilmente influenciado pelos outros,
          principalmente por Carolina e por Amaro. Sua relação com o Bom-crioulo
          vai além da amizade, e ele se vê envolvido em um conflito interno
          entre a afeição e o desejo, sem saber exatamente como lidar com os
          sentimentos que despertam nele. Ele é, ao mesmo tempo, alvo de um amor
          possessivo e do cuidado que Amaro lhe oferece, o que torna sua
          situação ainda mais complexa.
          <br />
          Embora sua postura inicial seja de uma certa subordinação, Aleixo
          também demonstra uma forte necessidade de afeto e pertencimento, algo
          que ele busca nas figuras que o cercam, sem compreender completamente
          o que está em jogo. Sua juventude e sua beleza são suas maiores
          características, mas é sua vulnerabilidade emocional e a luta para
          entender seu lugar nesse relacionamento que definem sua trajetória no
          romance.
        </p>
        <img src="Aleixo.jpg" alt="Aleixo" className={styles.personagemImage} />
      </div>

      <p className={styles.subtitle}>Carolina</p>
      <div className={styles.descriptionContainer}>
        <p className={styles.paragraph}>
          Carolina é uma mulher já com certa experiência de vida, com uma
          postura mais autossuficiente e prática. Ela tem uma aparência que
          reflete sua idade, mas ainda é capaz de seduzir e chamar a atenção,
          especialmente de Aleixo, com quem mantém um breve, mas significativo,
          envolvimento. Sua relação com Aleixo é marcada pela maternidade
          simbólica, já que ela acolhe o jovem em sua casa, mas também se
          envolve com ele de maneira mais íntima. <br />
          Apesar de sua maturidade, Carolina tem um lado intrigante e
          enigmático. Ela é capaz de manipular as situações a seu favor, sabendo
          exatamente como lidar com os homens ao seu redor. Sua atitude
          desafiadora e, por vezes, debochada, provoca em Amaro um ciúmes que
          será um dos principais motores da tensão no romance.
          <br />A personagem é, portanto, uma mulher de contrastes: ao mesmo
          tempo acolhedora e sedutora, maternal e manipuladora, ela é uma
          presença fundamental na história, ajudando a aprofundar as relações
          entre os outros personagens, especialmente a dinâmica entre Amaro e
          Aleixo. Sua habilidade em jogar com os sentimentos alheios faz dela
          uma personagem complexa, que não pode ser facilmente rotulada.
        </p>
        <img
          src="Carolina.png"
          alt="Carolina"
          className={styles.personagemImage}
        />
      </div>
    </main>
  );
}
