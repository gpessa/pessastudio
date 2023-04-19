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

  const urls = fragments.reduce(
    (fragments, fragment) => {
      const last = fragments[fragments.length - 1];
      const href = last.url + "/" + fragment;
      const page = findPage(href);
      return [...fragments, page];
    },
    [PAGES.HOME]
  );

  return urls.map((page) => ({
    ...page,
    absoluteUrl: WEBSITE + page.url,
  }));
};

export default useTree;
