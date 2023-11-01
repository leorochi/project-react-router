import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

const Banner = () => {
  return(
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}> 
            Olá, Mundo!
            </h1>

            <p className={styles.paragrafo}> 
            Meu nome é Leonardo e sou um estudante da Alura em busca de evolução.
            </p>

        </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}></img>
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto de Leonardo Martins'></img>
            </div>

        </div>
  )
}

export default Banner