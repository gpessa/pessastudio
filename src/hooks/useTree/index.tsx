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

  const { urls } = fragments.reduce(
    ({ urls, last }, fragment) => {
      last = [last, fragment].join("/");
      const page = findPage(last);

      return {
        urls: [...urls, page],
        last,
      };
    },
    { urls: [PAGES.HOME], last: "" }
  );

  return urls.map((page) => ({
    ...page,
    absoluteUrl: WEBSITE + page.url,
  }));
};

export default useTree;
