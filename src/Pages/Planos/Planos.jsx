import React from 'react'
import Plans from '../../Components/Planos/Plans'
import S from './Planos.module.css'
import Header from '../../Components/Header/Header'

const Planos = () => {
  return (
    <div className={S.container}>

      <div className={S.contHeader}>
        <Header />
      </div>

      <div className={S.conTitulo}>
        <h1 className={S.titulo}>PLANOS</h1>
      </div>

      <section className={S.containerCard}>
        
          <Plans className={S.plans} tipo='Free' valor='R$0,00' beneficio1='Uma tela' beneficio2='Max resolução: 720px' />
          <Plans className={S.plans} tipo='Single' valor='R$99,00' beneficio1='Uma tela' beneficio2='Max resolução: 1080px' />
          <Plans className={S.plans} tipo='Family' valor='R$300,00' beneficio1='Cinco telas' beneficio2='Max resolução: 1080px' />
        
      </section> 
    </div>
  )
}

export default Planos