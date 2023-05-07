import { gql } from "@apollo/client";

export default gql`
  query GetProducts {
    products {
      depth
      diameter
      height
      id
      length
      price
      weight
      width
    }
    productsMissing
  }
`;
