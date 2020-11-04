import { useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Columns, TH } from "@components"
import { Box, makeStyles } from "@material-ui/core"
import { BREAKPOINT, COLORS } from "@theme"
import Address from "./_address"

const SEDE_LEGALE = {
  name:"Pessastudio Horse Tecnology srl" ,
  country:"Italy" ,
  postalCode:"35043" ,
  streetAddress:"via Garibaldi, 28" ,
  addressLocality: "Monselice",
  addressRegion:"Padova" 
}

const SEDE_OPERATIVA = {
  name: "Pessastudio Horse Tecnology srl",
  country:"Italy",
  postalCode:"35044",
  streetAddress:"via Cà Megliadino, 35",
  addressLocality:"Montagnana",
  addressRegion: "Padova",
  telephone: "+39 0429 805613"
}

const BELGIO = {
  name: "Roberto Della Bella",
  email: "magiccavallo@hotmail.com",
  telephone: "+32 475 96 5123" 
}

const ITALIA = {
  name: "Anna Pessa",
  email: "annapessa@pessastudio.eu",
  telephone: "+39 349 0543098",
  whatsapp: "+39 349 0543098"
}

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 150,
    height: 150,
    marginBottom: theme.spacing(2),
    padding: '.25rem',
    backgroundColor: '#fff',
    border: `1px solid ${COLORS.GREY2}`,
    borderRadius: '50%'
  },
  right: {

    [theme.breakpoints.up(BREAKPOINT)]: {
      marginTop: 138
    }
  }
}))

const Contatti: React.FC = () => {
  const { formatMessage } = useIntl()
  const classes = useStyles()
  
  return (
    <Columns
      left={
        <>
          <TH variant="h1">{formatMessage({ id: "NAVIGATION__contatti" })}</TH>

          <Box mt={6}>
            <TH variant="h4">{formatMessage({ id: "CONTACT__sede-legale" })}</TH>
            <Address {...SEDE_LEGALE} />
            <div>
              COD. FISC. e Part: I.V.A. 04743610281<br />
              C.C.I.A.A. PD- R.E.A. 414822<br />
              Capitale interamente versato € 10.000,00
            </div>
          </Box>

          <Box mt={6}>
            <TH variant="h4">{formatMessage({ id: "CONTACT__sede-operativa" })}</TH>
            <Address {...SEDE_OPERATIVA} />
          </Box>

          <Box mt={6}>
            <TH variant="h4">{formatMessage({ id: "CONTACT__bank-details" })}</TH>
            <div>
              Cassa di Risparmio del Veneto filiale di Monselice<br />
              IBAN: IT97 M030 6962 6691 0000 0004 400<br />
              BIC-SWIFT: BCITITMM
            </div>
          </Box>
        </>
      }
      right={
        <div className={classes.right}>
          <Box>
            <TH variant="h4">{formatMessage({ id: "CONTACT__contatto-commerciale__italia" })}</TH>
            <img
              src={require("@images/anna.jpg")}
              className={classes.avatar}
              alt="Anna Pessa"
            />
            <Address {...ITALIA}/>
          </Box>
          
          <Box mt={6}>
            <TH variant="h4">{formatMessage({ id: "CONTACT__contatto-commerciale__belgio" })}</TH>
            <Address {...BELGIO}/>
          </Box>
        </div>
      }
    />
  )
}

export default Contatti
