import React, { ReactNode } from "react"

import * as styles from './styles.module.scss';

const Header = ({ as: Component = 'h3', children, ...props }: Props) => (
  <Component {...props}>
    <span className={styles.element}>{children}</span>
  </Component>
)

interface Props {
  as?: React.ElementType;
  children: ReactNode;
  className?: string;
};

export default Header



