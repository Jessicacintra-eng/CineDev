import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import s from "./Films.module.css"
import { BiSearchAlt } from 'react-icons/bi'

const Films = () => {
  return (
    <section className={s.paginaFilmes}>
      <section className={s.fundoPontilhado}></section>
      <section className={s.brilho}>
        <div className={s.texto}>
          <img className={s.outdoor} src="https://mcusercontent.com/8d01a411f692a38c571bf7140/images/c71563f4-aba6-f3de-f2ca-3a5ff2c69f0b.png" />
        </div>
      </section>
      <div class={s.buscarFilme}>
        <form>
          <p> Buscar Filme </p>
            <input type="text" placeholder='' className={s.inputBuscar} />
          <button type='sumbit' className={s.buttonBuscar}> <BiSearchAlt/> </button>
       
        </form>
      </div>
      <div className={s.carrossel}>
        <Carousel />
      </div>
    </section >
  )
}

export default Films