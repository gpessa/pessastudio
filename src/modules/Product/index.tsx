import { useProducts } from "hooks";
import { ProductId } from "hooks/useProducts";
import { useRouter } from "next/router";
export { getStaticProps } from "utils/getProps";

import React from "react";

const Product: React.FC = () => {
  const router = useRouter();
  const products = useProducts();
  const product = products[router.query.id as ProductId];

  debugger;

  return (
    <p>
      Post: {product.name} {product.description}
    </p>
  );
};

export default Product;
