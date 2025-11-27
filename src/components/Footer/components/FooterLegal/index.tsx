import { Divider, Link, Stack } from "@mui/material";
import { Section } from "components";
import { usePages } from "hooks";
import NextLink from "next/link";
import React from "react";

const FooterLegal: React.FC = () => {
  const {
    PAGES: { COOKIE_POLICY, TERMINI_E_CONDIZIONI, INFORMATIVA_PRIVACY },
  } = usePages();

  return (
    <Section spacing="small" textAlign="center">
      <Stack
        direction="row"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {[INFORMATIVA_PRIVACY, COOKIE_POLICY, TERMINI_E_CONDIZIONI].map(
          (link) => (
            <Link
              component={NextLink}
              href={link.url}
              variant="small"
              key={link.title}
            >
              {link.title}
            </Link>
          )
        )}
      </Stack>
    </Section>
  );
};

export default FooterLegal;
