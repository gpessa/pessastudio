import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../../components/Layout"
import ProductCard from "../../components/ProductCard"

const CubiCavalletti = () => (
  <Layout pageInfo={{ pageName: "ostacoli" }}>
    <Container>
      <h1>Cubi e Cavalletti</h1>
      
      <section>
        <h3>Cubi Mini</h3>
        <p>Bianchi, rossi, blu o gialli, sono utilizzati nei maneggi sia come riempitivi sotto le barriere, sia per realizzare sequenze di piccoli salti. Ottimi per indicare le traiettorie quando si predispongono esercizi per i principianti, ma anche per preparare una successione di cavalletti quando si addestrano cavalli. Sovrapponibili, costruiti con plastica resistente agli agenti atmosferici, nel caso di impatto accidentale garantiscono l'incolumità di cavalli e cavalieri.</p>

        <ProductCard
          image={require("../../images/cubi-mini.jpg")}
          name="Cubi Mini"
          description={[
              "Larghezza: 35 cm",
              "Lunghezza: 37 cm",
              "Altezza: 57 cm",
              "Peso: 3 kg."
          ]}
          price={35}
        />
       
        <ProductCard 
          image={require("../../images/cubi-maxi.jpg")}
          name="Cubi Maxi"
          description={[
              "Larghezza: 37 cm",
              "Lunghezza: 57 cm",
              "Altezza: 70 cm",
              "Peso: 5 kg."
          ]}
          price={62}
        />
      </section>

      <section>
        <h3>Cavalletti caprilli</h3>
        <p>Il passaggio sui cavalletti, rinforza la schiena del cavallo, scioglie la muscolatura, lo induce a flettere le articolazioni. Questo lavoro dovrà essere fatto in progressione, compatibilmente con le attitudini del cavallo. Iniziare con passaggi successivi su barriere a terra, quindi su cavalletti di 20 centimetri, quindi aumentarne l'altezza fino a 30 centimetri. Le distanze iniziali di 1,2 metri, vanno via via aumentate per arrivare a distanze fino a 1,7 metri. Sono disponibili nei colori bianco, rosso, blu e giallo. Possono essere forniti completi della barriera in PPO di colore bianco, diametro 95 lunghezza 2 metri, oppure singolarmente, avendo più fori per inserimento di barriere diametro 90, 95,100,105 millimetri. Lavati con idropulitrice riprendono i colori originari anche dopo 20 anni.</p>

        <ProductCard
          image={require("../../images/cavalletto.jpg")}
          name="Cavalletti caprilli"
          description={[
              "Larghezza: 50 cm.",
              "Altezza: 50 cm.",
              "Spessore: 10 cm.",
              "Peso: 2 Kg."
          ]}
          price={35}
        />
      </section>

    </Container>
  </Layout>
)

export default CubiCavalletti

