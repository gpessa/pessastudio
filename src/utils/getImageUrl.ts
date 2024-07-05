export const getImageUrl = (picture: any) =>
  `${process.env.NEXT_PUBLIC_WEBISTE_URL}/_next/image?url=${picture.default.src}&w=640&q=75`;
