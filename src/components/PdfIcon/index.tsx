import React from 'react';

import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from './styles.module.scss';

const PdfIcon = () => <FontAwesomeIcon icon={faFilePdf} className={styles.element}/>

export default PdfIcon;