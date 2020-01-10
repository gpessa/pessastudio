import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { Address, Columns, Header } from '../../components';
import * as styles from './styles.module.scss';

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

        <img src={require('../../images/anna.jpg')} className={`img-thumbnail rounded-circle mb-4 ${styles.selfie}`} />

        <Address
          name="Anna Pessa"
          email="annapessa@pessastudio.eu"
          telephoneMobile="+39 0429 805613"
          whatsapp="+39 0429 805613"
        />
      </>
    }
  />
)

export default injectIntl(Contatti)
