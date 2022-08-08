import React from 'react'
import AlteraDadosAssinaturas from '../../Components/CrudAssinaturas/alterarDados/AlteraDadosAssinaturas'
import Header from '../../Components/Header/Header'
import s from './ClientArea.module.css'

const ClientArea = () => {
  return (
    <main>
    <Header/>
      <h1>Alterar conta</h1>
      <section className={s.areaDoCliente}>
      <section  className={s.formAlt}>
      <AlteraDadosAssinaturas />
      </section>  
      </section>
    </main>
  )
}

export default ClientArea