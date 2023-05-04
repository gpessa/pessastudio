import { Trans } from "@lingui/macro";
import { Typography } from "@mui/material";
import { Product, Title } from "components";
import { ProductData } from "components/Product";
import { PRODUCT_GUTTER } from "theme";

const Barriere: React.FC<{ product: ProductData }> = ({ product }) => (
  <>
    <Title
      sx={{ mb: PRODUCT_GUTTER }}
      title={<Trans>Barriere</Trans>}
      text={
        <Trans>
          <Typography>
            Sono le componenti dell'ostacolo più stressate, poiché, come i
            candelieri e i pilieri, sono perennemente sottoposte all'azione
            aggressiva degli agenti atmosferici (caldo, freddo, sole, pioggia).
            A questi si aggiungono anche gli urti degli zoccoli dei cavalli,
            frequenti ribaltamenti e le manipolazioni necessarie per aggiustarne
            le altezze.
          </Typography>
          <Typography>
            Le barriere di abete, comunemente usate, richiedono una continua
            manutenzione perché si piegano, scoloriscono nel tempo e si rompono
            frequentemente.
          </Typography>
          <Typography>
            Le barriere sintetiche di Pessastudio, invece, hanno lo stesso peso
            di quelle in abete, ma perdono il loro colore solamente dopo anni,
            non si scrostano e, solo raramente, si rompono sotto l'azione di un
            carico eccessivo.
          </Typography>
        </Trans>
      }
    />
    <Product {...product} />
  </>
);

export default Barriere;
