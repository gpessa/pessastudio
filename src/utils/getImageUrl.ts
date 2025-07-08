import { WEBISTE_URL } from "./constants";

export const getImageUrl = (picture: any) =>
  `${WEBISTE_URL}/_next/image?url=${picture.default.src}&w=640&q=75`;
