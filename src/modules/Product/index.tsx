import React from "react";
import { useRouter } from "next/router";
import { useProducts } from "hooks";
import { ProductId } from "hooks/useProducts";
export { getStaticProps } from "utils/getProps";

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
