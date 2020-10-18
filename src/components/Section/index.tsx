import { BREAKPOINT, SECTION_SPACING } from '@theme';

import { Container, ContainerProps, makeStyles } from '@material-ui/core';
import React from 'react';

const CONFIUGURATIONS = {
  'vertical': {
    height: 530,
    width: '100%',
  },
  'horizontal': {
    height: '100%',
    width: '50%'
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    position: 'relative',
    padding: ({ spacing = 'medium' }: Props) => {
      const value = SECTION_SPACING('xs')(spacing)
      return `${value}px 0`;
    },
    [theme.breakpoints.up(BREAKPOINT)]: {
      padding: ({ spacing = 'medium' }: Props) => {
        const value = SECTION_SPACING('md')(spacing)
        return `${value}px 0`;
      }
    },
    '&:before': {
      backgroundImage: ({ image }: Props) => image && `url(${require(`@images/patterns/${image}.jpg`)})`,
      backgroundColor: ({ color }: Props) => color && color,
      backgroundSize: 'cover',
      position: 'absolute',
      content: "''",
      width: '100%',
      height: '100%',
      zIndex: -1,
      right: 0,
      top: 0,
      [theme.breakpoints.up(BREAKPOINT)]: {
        height: ({ type }: Props) => type ? CONFIUGURATIONS[type].height : '100%',
        width: ({ type }: Props) => type ? CONFIUGURATIONS[type].width : '100%',
      }
    }
  },
  container: {
    position: 'relative'
  }
}), { name: 'Section' });

type Props = {
  id?: string
  color?: string
  className?: string,
  disableGutters?: boolean,
  spacing?: 'small' | 'medium' | 'big' | 'menu'
  image?: 'paper' | 'marble-white' | 'marble-black'
  type?: 'vertical' | 'horizontal'
} & Pick<ContainerProps, "maxWidth" | "children">

const Section: React.FC<Props> = ({ maxWidth, disableGutters, ...props }) => {
  const classes = useStyles(props)

  return (
    <section className={`${classes.root} ${props.className}`} id={props.id}>
      <Container
        disableGutters={disableGutters}
        className={classes.container}
        maxWidth={maxWidth}
      >
        {props.children}
      </Container>
    </section>
  )
}

export default Section