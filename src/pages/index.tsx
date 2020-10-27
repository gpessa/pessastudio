import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AppsIcon from '@material-ui/icons/Apps';
import RestoreIcon from '@material-ui/icons/Restore';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

import { Hero, Products, Benefits, Testimonials } from "@components"
import { Typography } from "@material-ui/core";

const Index: React.FC = () => {
  const { formatMessage } = useIntl()

  const BENEFITS = [
    {
      icon: TurnedInNotIcon,
      title: formatMessage({ id: "BENEFITS--1__title" }),
      description: formatMessage({ id: "BENEFITS--1__text" }),
    },
    {
      icon: AccountBalanceIcon,
      title: formatMessage({ id: "BENEFITS--2__title" }),
      description: formatMessage({ id: "BENEFITS--2__text" }),
    },
    {
      icon: AppsIcon,
      title: formatMessage({ id: "BENEFITS--3__title" }),
      description: formatMessage({ id: "BENEFITS--3__text" }),
    },
    {
      icon: AppsIcon,
      title: formatMessage({ id: "BENEFITS--4__title" }),
      description: formatMessage({ id: "BENEFITS--4__text" }),
    },
    {
      icon: RestoreIcon,
      title: formatMessage({ id: "BENEFITS--5__title" }),
      description: formatMessage({ id: "BENEFITS--5__text" }),
    }
  ]

  return (
    <>
      <Hero
        image={require("@images/background-home-1.jpg")}
        text={formatMessage({ id: "HOME__hero__text" })}
      />

      <Benefits
        title={formatMessage({ id: "BENEFITS__title" })}
        subtitle={formatMessage({ id: "BENEFITS__subtitle" })}
        text={(
          <Typography
            variant="body1"
            id="BENEFITS__text"
            component={FormattedHTMLMessage}
          />
        )}
        benefits={BENEFITS}
      />

      <Products />

      <Testimonials />
    </>
  )
}

export default Index
