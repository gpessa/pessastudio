import { Box, Stack, SvgIconTypeMap } from "@mui/material";
import React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactElement } from "react";
import Th from "components/Th";

export type BenefitsItemProps = {
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  description: string | ReactElement;
  title: string | ReactElement;
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
    <div>{description}</div>
  </Box>
);

export default BenefitsItem;
