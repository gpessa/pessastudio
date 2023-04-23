import { WEBSITE } from "utils/constants";
import usePages, { Page } from "../usePages";

export type BreadcrumbList = (Page & { absoluteUrl: string })[];

const useTree = (path: string): BreadcrumbList => {
  const { PAGES } = usePages();

  const fragments = [...path.split("/").filter((f) => f != "")];

  const findPage = (url: string): Page => {
    const pages = Object.values(PAGES);
    const page = pages.find((page) => page.url === url)!;
    return page;
  };

  const addAbsolutePath = (page: Page) => ({
    ...page,
    absoluteUrl: WEBSITE + page.url,
  });

  return fragments
    .reduce(
      (result, _, index) => {
        const page = "/" + fragments.slice(0, index + 1).join("/");
        return [...result, page];
      },
      ["/"]
    )
    .map(findPage)
    .map(addAbsolutePath);
};

export default useTree;
