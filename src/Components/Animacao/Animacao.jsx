import React from 'react'
import S from './Animacao.module.css'
import gay from '../../assets/Animation/heart.png'
import lesbian from '../../assets/Animation/lesbian.png'
import transgender from '../../assets/Animation/transgender.png'

const Animacao = () => {
  return (
    <div className={S.container}>
        <div className={S.wrapper}>
          <img className={S.coracao} src={gay} alt="Coração com bandeira gay" />
          <img className={S.coracao} src={lesbian} alt="Coração com bandeira lesbica" />
          <img className={S.coracao} src={transgender} alt="Coração com bandeira trans" />
          <div className={S.shadow}></div>
          <div className={S.shadow}></div>
          <div className={S.shadow}></div>
        </div>
    </div>
  )
}

export default Animacao