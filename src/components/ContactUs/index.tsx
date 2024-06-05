import { Trans, t } from "@lingui/macro";
import { Typography, Link, Divider, Stack } from "@mui/material";
import { Title } from "components";
import Section from "components/Section";
import { usePages } from "hooks";
import LinkNext from "next/link";
import { ITALIA } from "utils/constants";

const ContactUs: React.FC<Pick<Parameters<typeof Section>[0], "color">> = ({
  color,
}) => {
  const { NAVIGATION } = usePages();

  return (
    <Section color={color} textAlign="center">
      <Stack gap={3}>
        <Title title={t`Vuoi maggiori informazioni?`} />

        <Typography fontSize="120%">
          <Trans>
            Contattaci usando l'email{" "}
            <Link underline="hover" href={`mailto:${ITALIA.email}`}>
              {ITALIA.email}
            </Link>{" "}
            <br />o chiamaci al numero:{" "}
            <Link
              underline="hover"
              href={`tel:${ITALIA.telephone.replace(/ /g, "")}`}
            >
              {ITALIA.telephone}
            </Link>
          </Trans>
        </Typography>

        <Typography fontSize="120%">
          <Trans>
            Oppure visita la nostra pagina dei{" "}
            <Link href={NAVIGATION.CONTATTI.url} component={LinkNext}>
              contatti
            </Link>{" "}
            per scoprire i rivenditori nella tua zona.
          </Trans>
        </Typography>
      </Stack>
    </Section>
  );
};

export default ContactUs;
