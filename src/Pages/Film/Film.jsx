import React from 'react'
import Header from '../../Components/Header/Header'
import s from './Film.module.css'

const Film = () => {
  return (
     
    <main className={s.paginaFilme}>
        
        <Header /> 

        <section className={s.poster}>

        <img className={s.imagem} src="https://cineclick-static.flixmedia.cloud/480/69/1080x1620_1589914813.jpg" alt="" />

        </section>

        <section className={s.info}>

        <div className={s.contTitulo}>

        <div className={s.titulo}> <h1> As branquelas - 2004 </h1>  </div>
         </div>
        <div className={s.descricao}> <h2>Descrição:</h2>
        <p> Em As Branquelas, os irmãos Marcus (Marlon Wayans) e Kevin Copeland (Shawn Wayans) são detetives do FBI que estão com problemas no trabalho. A última investigação da dupla foi um grande fracasso e eles estão sob a ameaça de serem demitidos. Quando um plano para sequestrar as mimadas irmãs Brittany (Maitland Ward) e Tiffany Wilson (Anne Dudek) é descoberto, o caso é entregue aos principais rivais dos irmãos Copeland, os agentes Vincent Gomez (Eddie Velez) e Jack Harper (Lochlyn Munro). </p>
        </div>

         <div className={s.infos_menores}>

        <div className={s.duracao}> <h2> Duração: 1h 49min </h2> </div>

        <div className={s.avaliacao}> <h2> Avaliação: Problemático</h2> </div>

        </div> 
        <div className={s.botaoAssistir}> 
         <button> Assistir </button>
        </div>
        </section>
       
      </main>

  )
}

export default Film