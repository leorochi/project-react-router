import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

const MenuLink = ({to, children}) => {

    const localizacao = useLocation();

  return (
    <>
    <Link className={`${localizacao.pathname === to ? styles.linkDestacado : ''}`} to={to}>
                {children}
    </Link>
    </>
  )
}

export default MenuLink