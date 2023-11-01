import PostModelo from 'componentes/PostModelo/PostModelo'
import React from 'react'
import styles from './SobreMim.module.css'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/foto_sobre_mim.jpg'

const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo='Sobre mim'>
      <h3 className={styles.subtitulo}>Olá, eu sou o Leonardo!</h3>
      <img src={fotoSobreMim} className={styles.fotoSobreMim} alt='Foto de Perfil'></img>

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de estar realizando esse curso.
      </p>

      <p className={styles.paragrafo}>
        Minha história com programação começou quando eu tinha 12 anos, meus pais me colocaram em um curso básico de informática e a partir daquele momento fui me interessando cada vez mais pela tecnologia. No entanto, só fui aprender lógica de programação e o básico de várias linguagens, como PHP, Javascript, Java, quando entrei pra um curso técnico de análise e desenvolvimento de sistemas, terminei o curso mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época acabei não dando continuidade aos estudos.
      </p>

      <p className={styles.paragrafo}>
       Agora depois de muito tempo decidi voltar a estudar programação e tá sendo uma das melhores coisas da minha vida, é muito bom estar sempre atualizado sobre tudo e a sensação de estar evoluindo é incrível, espero continuar cada vez mais dando passos a frente pra garantir o sucesso. 
      </p>

    </PostModelo>
  )
}

export default SobreMim