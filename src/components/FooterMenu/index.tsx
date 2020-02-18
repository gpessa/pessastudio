import React from "react"

import * as styles from "./styles.module.scss"
import { Link } from "gatsby-plugin-intl"

interface Props {
  title: string,
  links: {
    href?: string,
    to?: string,
    label: string
  }[]
}

const FooterMenu: React.FC<Props> = ({ title, links }) => (
  <div className={styles.menu}>
    <h6 className={styles.menuName}>{title}</h6>
    <ul className={styles.menuList}>
      {links.map((link, index) => {
        const { label, ...props } = link
        const Tag = props.to != undefined ? Link : 'a'
        return (
          <li className={styles.menuItem}>
            <Tag key={index} className={styles.menuItemLink} {...props}>{label}</Tag>
          </li>
        )
      })}
    </ul>
  </div>
)

export default FooterMenu

