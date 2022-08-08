import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import s from "./Films.module.css"
import { BiSearchAlt } from 'react-icons/bi'

const Films = () => {
  return (
    <section className={s.paginaFilmes}>
      <section className={s.fundoPontilhado}></section>
      <section className={s.brilho}>
        <div>
          <img className="texto" src="https://mcusercontent.com/8d01a411f692a38c571bf7140/images/054194ff-4a77-9887-fddc-82447b278dd3.png" />
        </div>
      </section>
      <div class={s.buscarFilme}>
        <form>
            <input type="text" placeholder='Buscar um filme' className={s.inputBuscar} />
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