import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"

import { Address, Header, Columns } from "../components"

const Contatti = ({ intl: { formatMessage } }) => (
  <Columns
    left={
      <>
        <h1>Contatti</h1>

        <section className="mb-5">
          <h4>Sede legale</h4>
          <Address
            name="PESSASTUDIO Horse Tecnology srl"
            country="Italy"
            postalCode="35043"
            streetAddress="via Garibaldi, 28"
            addressLocality="Monselice"
            addressRegion="Padova"
          />
          <div className="mt-2">
            COD. FISC. e Part: I.V.A. 04743610281<br/>
            C.C.I.A.A. PD- R.E.A. 414822<br/>
            Capitale interamente versato € 10.000,00
          </div>
        </section>

        <section className="mb-5">
          <h4>Sede operativa</h4>
          <Address
            name="PESSASTUDIO Horse Tecnology srl"
            country="Italy"
            postalCode="35044"
            streetAddress="via Cà Megliadino, 35"
            addressLocality="Montagnana"
            addressRegion="Padova"
            email="annapessa@pessastudio.eu"
            telephoneMobile="+39 0429 805613"
          />
        </section>

        <section>
          <h4>Estremi bancari</h4>
          <div>
            Cassa di Risparmio del Veneto filiale di Monselice<br/>
            IBAN: IT97 M030 6962 6691 0000 0004 400<br/>
            BIC-SWIFT: BCITITMM
          </div>
        </section>
      </>
    }
    right={
      <>
        <Header>Contatto commerciale</Header>
        <img src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/23380110_10214556926297738_2875892551704965348_n.jpg?_nc_cat=107&_nc_ohc=h6HbXr_kRz8AQnIXz-A3_hUjQxGeQOX74xfxwm45W3TVnj_byFxCrSWgA&_nc_ht=scontent-amt2-1.xx&oh=83281f1cef6ac1e228945e4e42ea6d56&oe=5EA93ED9" className="img-thumbnail rounded-circle" />
      </>
    }
  />
)

export default injectIntl(Contatti)
