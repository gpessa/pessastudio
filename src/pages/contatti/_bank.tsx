import { Data } from "src/components"
import { Trans } from "@lingui/macro"
import React from "react"

const Bank: React.FC<Props> = ({ name, iban, swift, ...props }) => {
  return (
    <div {...props}>
      {name && <Data label={<Trans>Istituto</Trans>} value={name} />}
      {iban && <Data label={<Trans>Iban</Trans>} value={iban} />}
      {swift && <Data label={<Trans>Swift</Trans>} value={swift} />}
    </div>
  )
}

type Props = {
  name: string
  iban: string
  swift: string
}

export default Bank
