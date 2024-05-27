import { useLingui } from "@lingui/react";
import { Grid, Stack, styled } from "@mui/material";
import { Section } from "components";
import ProductImages from "components/Product/ProductImages";
import ProductInformations from "components/Product/ProductInformations";
import { useProducts } from "hooks";
import { ProductId } from "hooks/useProducts";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { PRODUCT_GUTTER } from "theme";
import { loadCatalog } from "utils/getProps";

const StyledProductInformations = styled(ProductInformations)(({ theme }) => ({
  h6: {
    ...theme.typography.h4,
  },
}));

export default function Products({ id }: any) {
  const products = useProducts();
  const product = products[id as ProductId];

  const images = product.pictures.map((image) => ({
    caption: product.name,
    image,
  }));

  useLingui();

  return (
    <Section>
      <Stack gap={PRODUCT_GUTTER}>
        <div>
          <StyledProductInformations {...product} />
          dsd
        </div>
        <Grid container>
          <ProductImages {...{ images, md: 4 }} />
        </Grid>
      </Stack>
    </Section>
  );
}

export const getStaticPaths = (async () => ({
  fallback: false,
  paths: Object.values(ProductId).map((id) => ({
    params: {
      id,
    },
  })),
})) satisfies GetStaticPaths;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const messages = await loadCatalog(context);

  return {
    props: {
      id: context.params!.id,
      messages,
    },
  };
};
