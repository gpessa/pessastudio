import { Typography } from "@mui/material";
import Section from "components/Section";
import React from "react";
import { Trans } from "@lingui/react/macro";

const FooterVersion: React.FC<{ version: string }> = ({ version }) => (
  <Section spacing="small" textAlign="center">
    <Typography variant="small">
      <Trans>
        COD. FISC. e Part: I.V.A. 04743610281 C.C.I.A.A. PD - R.E.A. 414822
      </Trans>{" "}
      | version: {version}
    </Typography>
  </Section>
);

export default FooterVersion;
