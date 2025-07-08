import { WEBISTE_URL } from "utils/constants";
import usePages, { Page } from "../usePages";

export type BreadcrumbList = (Page & { absoluteUrl: string })[];

const useTree = (path: string): BreadcrumbList => {
  const { PAGES } = usePages();

  const fragments = [...path.split("/").filter((f) => f != "")];

  const findPage = (url: string): Page =>
    Object.values(PAGES).find((page) => page.url === url)!;

  const { urls } = fragments.reduce(
    ({ urls, last }, fragment) => {
      last = [last, fragment].join("/");

      const page = findPage(last);

      return {
        last,
        urls: [...urls, page],
      };
    },
    { last: "", urls: [PAGES.HOME] }
  );

  return urls.map((page) => ({
    ...page,
    absoluteUrl: WEBISTE_URL + page.url,
  }));
};

export default useTree;
