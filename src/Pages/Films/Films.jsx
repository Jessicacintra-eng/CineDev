import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import S from "../Films/Films.module.css"

const Films = () => {
  return (
    <main classname="stars">
      <section> 
      <div className='titulo'>
                <img className="texto" src="https://mcusercontent.com/8d01a411f692a38c571bf7140/images/054194ff-4a77-9887-fddc-82447b278dd3.png" />
         </div>
         </section>
     <div className='carrossel'>
    <Carousel />
    </div>
    </main>
  )
}

export default Films