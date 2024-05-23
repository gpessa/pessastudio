import { Box, Stack } from "@mui/material";
import Th from "components/Th";
import React from "react";
import { Benefit } from "..";

const BenefitsItem: React.FC<Benefit> = ({
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
    <div>{description}</div>
  </Box>
);

export default BenefitsItem;
