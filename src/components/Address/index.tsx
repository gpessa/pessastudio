import { Trans } from "@lingui/react/macro";
import { Box, Link, Stack, Typography } from "@mui/material";
import Data from "components/Data";
import React, { ReactNode } from "react";

const Address: React.FC<AddressProps> = ({
  name,
  country,
  addressLocality,
  id,
  bank,
  whatsapp,
  postalCode,
  mobile,
  addressRegion,
  streetAddress,
  telephone,
  email,
  website,
  ...props
}) => {
  const hasAddress = streetAddress != undefined;

  return (
    <Stack itemScope {...props} spacing={1}>
      <Typography fontWeight="bold">{name}</Typography>
      {hasAddress && (
        <Box itemScope>
          <div>{streetAddress}</div>
          <span>{addressLocality}</span>
          <br />
          <span>{postalCode}</span>, <span>{addressRegion}</span> (
          <span>{country}</span>)
        </Box>
      )}
      <Box>
        {id && (
          <Data
            label={<Trans>Codice Fiscale e Partita IVA</Trans>}
            value={id}
          />
        )}

        {mobile && (
          <Data
            label={<Trans>Telefono</Trans>}
            value={
              <Link underline="hover" href={`tel:${mobile.replace(/ /g, "")}`}>
                {mobile}
              </Link>
            }
          />
        )}

        {telephone && (
          <Data
            label={<Trans>Telefono</Trans>}
            value={
              <Link
                underline="hover"
                href={`tel:${telephone.replace(/ /g, "")}`}
              >
                {telephone}
              </Link>
            }
          />
        )}

        {whatsapp && (
          <Data
            label={<Trans>WhatsApp</Trans>}
            value={
              <Link
                underline="hover"
                href={`https://wa.me/${whatsapp.replace(/ /g, "")}`}
              >
                {whatsapp}
              </Link>
            }
          />
        )}

        {email && (
          <Data
            label={<Trans>Email</Trans>}
            value={
              <Link underline="hover" href={`mailto:${email}`}>
                {email}
              </Link>
            }
          />
        )}

        {website && (
          <Data
            label={<Trans>Website</Trans>}
            value={
              <Link underline="hover" href={website} target="_blank">
                {website}
              </Link>
            }
          />
        )}
      </Box>
    </Stack>
  );
};

export interface AddressProps {
  bank?: ReactNode;
  name?: ReactNode;
  email?: string;
  country?: string;
  whatsapp?: string;
  postalCode?: string;
  addressRegion?: string;
  streetAddress?: string;
  addressLocality?: string;
  id?: string;
  telephone?: string;
  mobile?: string;
  className?: string;
  website?: string;
}

export default Address;
