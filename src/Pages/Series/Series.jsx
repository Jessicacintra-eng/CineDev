import React from 'react'
import { useParams } from 'react-router-dom'
import CarouselSeries from '../../Components/Carousel/CarouselSeries'
import Header from '../Header/Header'
import s from "./Series.module.css"
import { BiSearchAlt } from 'react-icons/bi'
import { getAssinaturas } from '../../Services/API'
import { useEffect,useState } from 'react'


const Series = () => {
  const params = useParams()
  const [cliente, setCliente] = useState([])

  async function requisicao() {
    const response = await getAssinaturas(params.id)
    setProdutos(response)
  }

  useEffect(() => {
    requisicao()
  }, [params.id])

  return (
    <section className={s.paginaFilmes}>
      <Header/>
      <section className={s.fundoPontilhado}></section>
      <section className={s.brilho}>
        <div className={s.texto}>
          {/* <img className={s.outdoor} src="https://mcusercontent.com/8d01a411f692a38c571bf7140/images/c71563f4-aba6-f3de-f2ca-3a5ff2c69f0b.png" /> */}
        </div>
      </section>
      <div class={s.buscarFilme}>
        <form>
          <p> Buscar </p>
            <input type="text" placeholder='' className={s.inputBuscar} />
          <button type='sumbit' className={s.buttonBuscar}> <BiSearchAlt/> </button>
       
        </form>
      </div>
      <div className={s.carrossel}>
        <CarouselSeries />
      </div>
    </section >

  )
}

export default Series