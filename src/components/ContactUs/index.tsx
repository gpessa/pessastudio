import { Trans } from "@lingui/react/macro";
import { Link, Stack, Typography } from "@mui/material";
import { sendGAEvent } from "@next/third-parties/google";
import LinkNext from "next/link";
import { Title, Section } from "components";
import { useLingui } from "@lingui/react/macro";
import { usePages } from "hooks";
import { ITALIA } from "utils/constants";

const ContactUs: React.FC<Pick<Parameters<typeof Section>[0], "color">> = ({
  color,
}) => {
  const { NAVIGATION } = usePages();
  const { t } = useLingui();

  return (
    <Section color={color} textAlign="center">
      <Stack gap={3}>
        <Title title={t`Vuoi maggiori informazioni?`} />

        <Typography fontSize="120%">
          <Trans>
            Contattaci usando l'email{" "}
            <Link
              onClick={() => sendGAEvent("event", "click_on_contact")}
              underline="hover"
              href={`mailto:${ITALIA.email}`}
            >
              {ITALIA.email}
            </Link>{" "}
            <br />o chiamaci al numero:{" "}
            <Link
              onClick={() => sendGAEvent("event", "click_on_contact")}
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
            <Link
              onClick={() => sendGAEvent("event", "click_on_contact")}
              href={NAVIGATION.CONTATTI.url}
              component={LinkNext}
            >
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
