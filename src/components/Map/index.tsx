import React from "react"

const styles = require('./styles.scss');

const Map = () => (
  <div className={styles.container}> 
    <iframe width="100%" height="300" src="https://maps.google.com/maps?q=Pessa%20Studio&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
  </div>
)

export default Map



