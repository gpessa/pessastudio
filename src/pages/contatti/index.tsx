import { useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Address, Columns, TH1, TH4, TH4Sans } from "@components"
import { Box, makeStyles } from "@material-ui/core"
import { COLORS } from "@theme"

const SEDE_LEGALE = {
  name:"PESSASTUDIO Horse Tecnology srl" ,
  country:"Italy" ,
  postalCode:"35043" ,
  streetAddress:"via Garibaldi, 28" ,
  addressLocality: "Monselice",
  addressRegion:"Padova" 
}

const SEDE_OPERATIVA = {
  name: "PESSASTUDIO Horse Tecnology srl",
  country:"Italy",
  postalCode:"35044",
  streetAddress:"via Cà Megliadino, 35",
  addressLocality:"Montagnana",
  addressRegion:"Padova" 
}

const BELGIO = {
  name: "Roberto Della Bella",
  email: "magiccavallo@hotmail.com",
  telephoneMobile: "+32 475 96 5123" 
}

const ITALIA = {
  name: "Anna Pessa",
  email: "annapessa@pessastudio.eu",
  telephoneMobile: "+39 0429 805613",
  whatsapp: "+39 0429 805613"
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
  }
}))

const Contatti: React.FC = () => {
  const { formatMessage } = useIntl()
  const classes = useStyles()
  
  return (
    <Columns
      left={
        <>
          <TH1>{formatMessage({ id: "NAVIGATION__contatti" })}</TH1>

          <Box mt={6}>
            <TH4Sans gutterBottom>{formatMessage({ id: "CONTACT__sede-legale" })}</TH4Sans>
            <Address {...SEDE_LEGALE} />
            <div>
              COD. FISC. e Part: I.V.A. 04743610281<br />
              C.C.I.A.A. PD- R.E.A. 414822<br />
              Capitale interamente versato € 10.000,00
            </div>
          </Box>

          <Box mt={6}>
            <TH4Sans gutterBottom>{formatMessage({ id: "CONTACT__sede-operativa" })}</TH4Sans>
            <Address {...SEDE_OPERATIVA} />
          </Box>

          <Box mt={6}>
            <TH4Sans gutterBottom>{formatMessage({ id: "CONTACT__bank-details" })}</TH4Sans>
            <div>
              Cassa di Risparmio del Veneto filiale di Monselice<br />
              IBAN: IT97 M030 6962 6691 0000 0004 400<br />
              BIC-SWIFT: BCITITMM
            </div>
          </Box>
        </>
      }
      right={
        <>
          <Box mt={6}>
            <TH4 gutterBottom>{formatMessage({ id: "CONTACT__contatto-commerciale__italia" })}</TH4>
            <img
              src={require("@images/anna.jpg")}
              alt="Anna Pessa"
              className={classes.avatar}
            />
            <Address {...ITALIA}/>
          </Box>
          
          <Box mt={6}>
            <TH4 gutterBottom>{formatMessage({ id: "CONTACT__contatto-commerciale__belgio" })}</TH4>
            <Address {...BELGIO}/>
          </Box>
        </>
      }
    />
  )
}

export default Contatti
