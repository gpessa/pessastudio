import { Container, ContainerProps, makeStyles } from "@material-ui/core";
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}))

const Section: React.FC<SectionPros> = ({ children, className, id, maxWidth, ...props }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.root} ${className}`} id={id} {...props}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </div>
  )
}

type SectionPros = {
  id?: any;
  className?: string;
} & Pick<ContainerProps, 'maxWidth' | 'children'>

export default Section



