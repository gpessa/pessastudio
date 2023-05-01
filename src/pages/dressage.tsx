import { ProductId } from "types/graphql";
import { getServerSidePropsWithProdcuts } from "utils/lingui";

export { default } from "modules/Dressage";

export const getServerSideProps = getServerSidePropsWithProdcuts([
  ProductId.RettangoloDressage_20X60Olympic,
  ProductId.RettangoloDressage_20X40Training,
]);
