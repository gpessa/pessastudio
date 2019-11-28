import React from "react"
import { Section, SubSection } from "../../components";
import Fosso from "./fosso";
import Barriere from "./barriere";
import Cavalletti from "./cavalletti";
import Cubi from "./cubi";
import CandelieriLameForate from "./candelieri-e-lame-forate";
import CucchiaiSegnaletica from "./cucchiai-e-segnaletica";
import { Container, Row, Col } from "react-bootstrap";

const OstacoliPage = () => (
  <>
    <Section fluid>
      <Container>
        <h1>Ostacoli</h1>
        <p>I nostri ostacoli sono progettati e costruiti per durare nel tempo non richiedono alcuna manutenzione e conservano, inalterata, la loro "bellezza" anche se lasciati nel campo per anni. Se gli ostacoli per il professionista sono uno strumento di lavoro, per molti altri appassionati rappresentano la realizzazione di un sogno. Noi abbiamo deciso di rendere questi strumenti resistenti nel tempo per fare in modo che questo sogno duri.</p>
        <p>Potrete scegliere le quantità e i colori nella nostra gamma di produzione e acquistare anche singoli pezzi di ricambio.</p>
      </Container>

      <SubSection className="bg-light">
        <Barriere />
      </SubSection>

      <SubSection>
        <Fosso />
      </SubSection>

      <Cavalletti />
      <Cubi />
      <CandelieriLameForate />
      <CucchiaiSegnaletica />
      
    </Section>
  </>
)

export default OstacoliPage

