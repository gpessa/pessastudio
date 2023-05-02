import { ProductId } from "types/graphql";
import { getServerSidePropsWithProdcuts } from "utils/lingui";

export { default } from "modules/Dressage";

export const getServerSideProps = getServerSidePropsWithProdcuts([
  ProductId.LetteraDressageTraining,
  ProductId.ModuloDressageTraining,
  ProductId.RettangoloDressage_20X60Training,
  ProductId.RettangoloDressage_20X40Training,
  ProductId.LetteraDressageOlympic,
  ProductId.ModuloDressageOlympic,
  ProductId.RettangoloDressage_20X60Olympic,
  ProductId.RettangoloDressage_20X40Olympic,
]);
