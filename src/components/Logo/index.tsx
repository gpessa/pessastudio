import React, { useRef, useLayoutEffect } from "react"
import { Image } from 'react-bootstrap';

import * as styles from './styles.module.scss';

const Logo = () => {
  const refContainer = useRef <HTMLHeadingElement>(null);
  
  useLayoutEffect(() => {
    const handleScroll = _ => {
      if (window.pageYOffset > 1) {
        refContainer.current!.classList.add(styles.elementSmall);
      } else {
        refContainer.current!.classList.remove(styles.elementSmall);
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className={styles.element} ref={refContainer}>
      <Image src={require("../../images/favicon.jpg")} alt="Pessa Studio" className={styles.image} />
      <hgroup className={styles.group}>
        <h1 className={styles.title}>Pessa studio</h1>
        <div className={styles.subtitle}>Horse technology</div>
      </hgroup>
    </div>
  )
}

export default Logo