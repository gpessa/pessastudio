import { useTree } from "src/hooks"
import { useLingui } from "@lingui/react"
import HomeIcon from "@mui/icons-material/Home"
import { Breadcrumbs, Container, Link, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { LocalizedLink } from "gatsby-theme-i18n"
import React from "react"

const RootStyled = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.warm2.main,
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
}))

const HomeIconStyled = styled(HomeIcon)({
  marginBottom: -5,
})

const Breadcrumb: React.FC<{ path: string }> = ({ path }) => {
  const fragments = useTree(path)
  const { i18n } = useLingui()

  return fragments.length > 1 ? (
    <RootStyled>
      <Breadcrumbs separator="›" gutterBottom={false} component={props => <Container {...props} component="nav" />}>
        {fragments.map((url, index) => {
          const label = i18n._(`${url}:title`)

          switch (index) {
            case 0:
              return (
                <Link to={url} key={url} component={LocalizedLink}>
                  <HomeIconStyled />
                </Link>
              )

            case fragments.length - 1:
              return (
                <Typography gutterBottom={false} key={url}>
                  {label}
                </Typography>
              )

            default:
              return (
                <Link to={url} key={url} underline="hover" component={LocalizedLink}>
                  {label}
                </Link>
              )
          }
        })}
      </Breadcrumbs>
    </RootStyled>
  ) : null
}

export default Breadcrumb
