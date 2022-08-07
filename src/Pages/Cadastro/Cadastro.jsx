import React from 'react'
import S from './Cadastro.module.css'

import Arco1 from '../../assets/imgCadastro/arco1.svg'
import Arco2 from '../../assets/imgCadastro/arco2.svg'
import Logo from '../../assets/imgCadastro/Logo2.svg'

import CadastroAssinaturas from '../../Components/CrudAssinaturas/cadastro/CadastroAssinaturas'

const Cadastro = () => {
  return (
    <div className={S.container}>
        <section className={S.containerLogo}>
          <img className={S.logo} src={Logo} alt="" />
          <h2 className={S.titulo2}>Encontre as melhores histórias</h2>
        </section>

        <section className={S.containerCad}>
          <img className={S.arco} src={Arco2} alt="" />
          <CadastroAssinaturas />
          <img className={S.arco} src={Arco1} alt="" />
        </section>
    </div>
  )
}

export default Cadastro