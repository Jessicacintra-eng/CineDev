import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { alteraAssianturas } from '../../../Services/API'
import { getAssinaturas } from '../../../Services/API'

import S from './AlterarDados.module.css'

const AlteraDadosAssinaturas = () => {
  
  const { id } = useParams()
  const [dadosAntigos, setDadosAntigos] = useState({
        cliente: '',
        email: '',
        senha: '',
        planos: '',
  })

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

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

  const requisicao = async (e) => {
    e.preventDefault()
    const response = await alteraAssianturas(id, dadosAntigos)

    if(response){
      setStatus({
        type: 'sucess',
        mensagem: 'Dados alterados com sucesso!'
      })
    }
  }

  return (
    <div className={S.container}>

      <form className={S.form}>
        <input type="text" name="cliente" id="cliente" value={dadosAntigos.cliente} placeholder={dadosAntigos.cliente} onChange={(e) => handleInputChange(e , "cliente")} className={S.input} />

        <input type="email" name="EMAIL" id="email" value={dadosAntigos.email} placeholder={dadosAntigos.email} onChange={(e) => handleInputChange(e , "email")} className={S.input} />

        <input type="password" name="senha" id="senha" value={dadosAntigos.senha} placeholder={dadosAntigos.senha} onChange={(e) => handleInputChange(e , "senha")} className={S.input} />

        <input type="text" name="planos" id="planos" value={dadosAntigos.planos} placeholder={dadosAntigos.planos} onChange={(e) => handleInputChange(e , "planos")} className={S.input} />

        <button onClick={requisicao} className={S.alterar}>Alterar dados</button>

        {status.type === 'sucess'? <p className={S.mensagemSucesso}>{status.mensagem}</p> : ''}

      </form>
      
    </div>
  )

}
export default AlteraDadosAssinaturas