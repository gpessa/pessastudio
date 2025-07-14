import { Trans, useLingui } from "@lingui/react/macro";
import { Typography } from "@mui/material";
import { Product, Title } from "components";
import { ProductDataTranslated } from "hooks/useProducts";
import { PRODUCT_GUTTER } from "theme";
import { NAME } from "utils/constants";

const Barriere: React.FC<{ products: ProductDataTranslated[] }> = ({
  products,
}) => {
  const { t } = useLingui();

  return (
    <>
      <Title
        sx={{ mb: PRODUCT_GUTTER }}
        title={t`Barriere`}
        text={
          <Trans>
            <Typography>
              Sono le componenti dell'ostacolo più stressate, poiché, come i
              candelieri e i pilieri, sono perennemente sottoposte all'azione
              aggressiva degli agenti atmosferici (caldo, freddo, sole,
              pioggia). A questi si aggiungono anche gli urti degli zoccoli dei
              cavalli, frequenti ribaltamenti e le manipolazioni necessarie per
              aggiustarne le altezze.
            </Typography>
            <Typography>
              Le barriere di abete, comunemente usate, richiedono una continua
              manutenzione perché si piegano, scoloriscono nel tempo e si
              rompono frequentemente.
            </Typography>
            <Typography>
              Le barriere sintetiche di {NAME}, invece, hanno lo stesso peso di
              quelle in abete, ma perdono il loro colore solamente dopo anni,
              non si scrostano e, solo raramente, si rompono sotto l'azione di
              un carico eccessivo.
            </Typography>
          </Trans>
        }
      />
      <Product {...products[0]} />
    </>
  );
};

export default Barriere;
