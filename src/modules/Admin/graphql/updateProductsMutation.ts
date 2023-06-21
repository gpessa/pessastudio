import { gql } from "@apollo/client";

export default gql`
  mutation UpdateProducts($input: [ProductRemoteInput!]!) {
    updateProducts(input: $input) {
      id
      depth
      diameter
      height
      length
      price
      weight
      width
    }
  }
`;
