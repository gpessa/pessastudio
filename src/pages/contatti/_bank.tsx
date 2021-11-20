import { Trans } from "@lingui/macro"
import React from "react"
import { Data } from "src/components"

const Bank: React.FC<Props> = ({ name, iban, swift, ...props }) => (
  <div {...props}>
    {name && <Data label={<Trans>Istituto</Trans>} value={name} />}
    {iban && <Data label={<Trans>Iban</Trans>} value={iban} />}
    {swift && <Data label={<Trans>Swift</Trans>} value={swift} />}
  </div>
)

type Props = {
  name: string
  iban: string
  swift: string
}

export default Bank
