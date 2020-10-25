import { Section, TH2, TH4, TH5, Caption } from "@components"
import { Button, Grid, Card, CardHeader, CardMedia, makeStyles, Container, Box, CardContent, Table, TableCell, TableRow, CardActions } from "@material-ui/core"
import { COLORS, FONTS } from "@theme"
import React from "react"
import { StickyContainer, Sticky } from 'react-sticky';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: COLORS.WARM2
  },
  titleSticky: {
    zIndex: theme.zIndex.appBar + 1,
    top: `80px!important`,
    boxShadow: theme.shadows[8],
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    borderLeft: `8px solid ${theme.palette.common.white}!important`,
  },
  item: {
    flexDirection: 'column',
    minHeight: '100%',
    display: 'flex',
  },
  title: {
    borderLeft: `8px solid ${theme.palette.primary.main}`,
    textTransform: 'uppercase',
    minHeight: 82,
    transition: theme.transitions.create(
      ['color', 'background-color'],
      { duration: theme.transitions.duration.short }
    ),
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
  content: {
    flexGrow: 1,
    padding: 0,
    paddingBottom: '0!important',
    '& .MuiTableRow-root': {
      backgroundColor: 'transparent!important'
    },
    '& .MuiTableRow-root:last-child .MuiTableCell-root': {
      borderBottom: 'none'
    }
  },
  head: {
    fontSize: 14,
    fontWeight: 500,
    color: COLORS.GREY1,
    textTransform: 'uppercase',
    fontFamily: FONTS.SANSERIF,
  }
}))

const Compare: React.FC<Props> = ({ products, title, text }) => {
  const classes = useStyles()

  return (
    <Section maxWidth={false} disableGutters className={classes.root}>
      <Box textAlign="center" mb={5}>
        <TH2>{title}</TH2>
        <div>{text}</div>
      </Box>
      <div>
        <Container>
          <Grid container spacing={7}>
            {products.map(({ description, image, name, features }) => (
              <Grid md={4} item>
                <StickyContainer>
                  <Card elevation={2} className={classes.item}>
                    <Sticky>{({ style, isSticky }) => (
                      <CardHeader
                        style={style}
                        disableTypography={true}
                        className={`${classes.title} ${isSticky && classes.titleSticky}`}
                        title={<TH5 sans gutterBottom={false} dangerouslySetInnerHTML={{ __html: name }} />}
                      />
                    )}</Sticky>
                    <CardMedia
                      className={classes.media}
                      image={image}
                      title={name}
                    />
                    <CardContent>{description}</CardContent>
                    <CardContent className={classes.content}>
                      <Table>
                        {features && features.map(({ name, value }) => (
                          <TableRow key={name}>
                            <TableCell>
                              <Caption gutterBottom={false}>{name}</Caption>
                            </TableCell>
                            <TableCell dangerouslySetInnerHTML={{ __html: value }} />
                          </TableRow>
                        ))}
                      </Table>
                    </CardContent>
                    <CardActions>
                      <Button
                        color="primary"
                        fullWidth
                        size="large"
                        href={`mailto:annapessa@pessastudio.eu?subject=Info ${name}`}
                      >Richiedi un preventivo</Button>
                    </CardActions>
                  </Card> 
                  </StickyContainer>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </Section>
  )
} 

type Props = {
  title: string
  text: string
  products: {
    name: string
    description?: string | ReactNode
    image: string,
    features?: {
      name: string
      value: string
    }[]
  }[]
}

export default Compare