import HomeIcon from "@mui/icons-material/Home"
import { Breadcrumbs, Container, Link, styled, Typography } from "@mui/material"
import { LocalizedLink } from "gatsby-theme-i18n"
import React from "react"
import { BreadcrumbList } from "hooks/useTree"

const RootStyled = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.warm2.main,
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
}))

const HomeIconStyled = styled(HomeIcon)({
  marginBottom: -5,
})

const Breadcrumb: React.FC<{ breadcrumb: BreadcrumbList }> = ({ breadcrumb }) =>
  breadcrumb.length > 1 ? (
    <RootStyled>
      <Breadcrumbs separator="›" gutterBottom={false} component={props => <Container {...props} component="nav" />}>
        {breadcrumb.map(({ name, url }, index) => {
          switch (index) {
            case 0:
              return (
                <Link to={url} key={url} component={LocalizedLink}>
                  <HomeIconStyled />
                </Link>
              )

            case breadcrumb.length - 1:
              return (
                <Typography gutterBottom={false} key={url}>
                  {name}
                </Typography>
              )

            default:
              return (
                <Link to={url} key={url} underline="hover" component={LocalizedLink}>
                  {name}
                </Link>
              )
          }
        })}
      </Breadcrumbs>
    </RootStyled>
  ) : null

export default Breadcrumb
