import React from "react"

import * as styles from './styles.module.scss';

const Map = () => (
  <div className={styles.container}> 
    <iframe width="100%" height="300" src="https://maps.google.com/maps?q=Pessa%20Studio&t=&z=9&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}></iframe>
  </div>
)

export default Map



