import React from 'react'
import styles from './BotaoPrincipal.module.css'

const BotaoPrincipal = ({children}) => {
  return (
    <button className={styles.botaoLer}>{children}</button>
  )
}

export default BotaoPrincipal