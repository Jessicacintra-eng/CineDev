import React from 'react'
import AlteraDadosAssinaturas from '../../Components/CrudAssinaturas/alterarDados/AlteraDadosAssinaturas'
import Header from '../../Components/Header/Header'
import s from './ClientArea.module.css'
import user from '../../assets/iconheader/user1.png'
import DeletarDados from '../../Components/CrudAssinaturas/deletarDados/deletarDados'


const ClientArea = () => {
  return (
    <main className={s.main}>
      <div className={s.contHeader}>
        <Header/>
      </div>  

      <section className={s.fundoPontilhado}></section>
      <section className={s.container}>
        <section className={s.secPerfil}>
            <div className={s.contImg}><img className={s.userImg} src={user} alt="" />
            </div>
            <div className={s.qudrado}></div>
        </section>

        <section className={s.conteinerForm}>

            <div className={s.contForm}>
            <h1 className={s.titulo}>MINHA CONTA</h1>
              <AlteraDadosAssinaturas />
                <DeletarDados/>
            </div>
              

        </section>
      </section>

    </main>
  )
}

export default ClientArea