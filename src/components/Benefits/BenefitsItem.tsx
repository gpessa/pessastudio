import { TH } from '@components';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Benefit } from '.';

const useStyles = makeStyles(theme => ({
  title: {
    margin: `${theme.spacing(1)}px 0`
  }
}));

const BenefitsItem: React.FC<Benefit> = ({ icon: Icon, title, description, ...props }) => {
  const classes = useStyles()

  return (
    <div {...props}>
      {Icon && <Icon />}
      <TH variant="h6" sans className={classes.title}>{title}</TH>
      <div>{description}</div>
    </div>
  )
}

export default BenefitsItem
