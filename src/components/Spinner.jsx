import React from 'react';
import { ImSpinner10 } from 'react-icons/im';
import styles from '../css/Spinner.module.css';
export function Spinner() {
  return (
    <div className={styles.spinner}>
        <ImSpinner10 className={styles.spinning}size={120}/>
    </div>
  )
}