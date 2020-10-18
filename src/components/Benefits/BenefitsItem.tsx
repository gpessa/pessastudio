import { TH4Sans } from '@components';
import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

type Props = {
  title: string
  description: string
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

const useStyles = makeStyles(theme => ({
  title: {
    margin: `${theme.spacing(1)}px 0`
  }
}));

const BenefitsItem: React.FC<Props> = ({ icon: Icon, title, description, ...props }) => {
  const classes = useStyles()

  return (
    <div {...props}>
      {Icon && <Icon />}
      <TH4Sans className={classes.title}>{title}</TH4Sans>
      <div>{description}</div>
    </div>
  )
}

export default BenefitsItem
