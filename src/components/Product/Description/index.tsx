import React, { ReactNode } from "react"

const Description: React.FC<{ description?: string | ReactNode }> = ({ description }) => {
  return description ? <div>{description}</div> : null
}

export default Description