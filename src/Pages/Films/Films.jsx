import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../../Components/Carousel/Carousel'
import Header from '../../Components/Header/Header'

const Films = () => {
  const { id } = useParams()
  return (
    <main>
      <Header/>
      <Carousel />
    </main>
  )
}

export default Films