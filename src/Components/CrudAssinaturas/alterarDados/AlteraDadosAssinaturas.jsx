import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { alteraAssianturas } from '../../../Services/API'
import { getAssinaturas } from '../../../Services/API'

const AlteraDadosAssinaturas = () => {
  
  const { id } = useParams()
  const [dadosAntigos, setDadosAntigos] = useState({})

  const getDadosUsuario = async () => {
    const dados = await getAssinaturas(id)
    setDadosAntigos(dados)
  }
  
  useEffect(() => {
    getDadosUsuario()
  }, [])

  const handleInputChange = (e, key) => {
    setDadosAntigos({...dadosAntigos, [key]: e.target.value})
  }

  const requisicao = () => {
    console.log(id, dadosAntigos);
    alteraAssianturas(id, dadosAntigos)
  }

  return (
    <div>

      <form>
        <input type="text" name="cliente" id="cliente" value={dadosAntigos.cliente} placeholder={dadosAntigos.cliente} onChange={(e) => handleInputChange(e , "cliente")} />

        <input type="email" name="EMAIL" id="email" value={dadosAntigos.email} placeholder={dadosAntigos.email} onChange={(e) => handleInputChange(e , "email")} />

        <input type="password" name="senha" id="senha" value={dadosAntigos.senha} placeholder={dadosAntigos.senha} onChange={(e) => handleInputChange(e , "senha")} />

        <input type="text" name="planos" id="planos" value={dadosAntigos.planos} placeholder={dadosAntigos.planos} onChange={(e) => handleInputChange(e , "planos")} />

        <button onClick={requisicao}>Alterar dados</button>
      </form>
      
    </div>
  )

}
export default AlteraDadosAssinaturas