import HomeIcon from "@mui/icons-material/Home";
import {
  Breadcrumbs,
  Container,
  Link,
  styled,
  Typography,
} from "@mui/material";
import { usePages } from "hooks";
import useTree from "hooks/useTree";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

const RootStyled = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.warm2.main,
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
}));

const HomeIconStyled = styled(HomeIcon)({
  marginBottom: -5,
});

const Breadcrumb: React.FC = () => {
  const { pathname } = useRouter();
  const breadcrumb = useTree(pathname);
  const { PAGES } = usePages();

  const showBreadcrumb = ![
    PAGES.PAGE_404.url,
    PAGES.PAGE_500.url,
    PAGES.HOME.url,
  ].includes(pathname);

  return showBreadcrumb ? (
    <RootStyled>
      <Breadcrumbs
        separator="›"
        gutterBottom={false}
        component={(props) => <Container {...props} component="nav" />}
      >
        {breadcrumb.map(({ title, url }, index) => {
          switch (index) {
            case 0:
              return (
                <Link href={url} key={url} component={NextLink}>
                  <HomeIconStyled />
                </Link>
              );

            case breadcrumb.length - 1:
              return (
                <Typography gutterBottom={false} key={url}>
                  {title}
                </Typography>
              );

            default:
              return (
                <Link
                  href={url}
                  key={url}
                  underline="hover"
                  component={NextLink}
                >
                  {title}
                </Link>
              );
          }
        })}
      </Breadcrumbs>
    </RootStyled>
  ) : null;
};

export default Breadcrumb;
