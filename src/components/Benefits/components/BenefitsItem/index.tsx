"use client";

import { Box, Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Th from "components/Th";
import React from "react";
import { ReactNode } from "react";

export type BenefitsItemProps = {
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  description: ReactNode;
  title: ReactNode;
};

const BenefitsItem: React.FC<BenefitsItemProps> = ({
  icon: Icon,
  title,
  description,
  ...props
}) => (
  <Box {...props}>
    <Stack
      direction="row"
      spacing={{ md: 2, xs: 1 }}
      alignItems="center"
      mb={2}
    >
      {Icon && <Icon />}
      <Th variant="h6" sans>
        {title}
      </Th>
    </Stack>
    <Typography>{description}</Typography>
  </Box>
);

export default BenefitsItem;
