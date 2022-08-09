import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import { getClientes } from '../../../Services/API'
import {adicionaAssinaturas} from '../../../Services/API'
import S from './CadastroAssinaturas.module.css'

const FormCadastroAssinaturas = () => {

    const [client, setCliente] = useState({
        cliente: '',
        email: '',
        senha: '',
        planos: '',
        redirectoTo: null
    })

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    const [acesso, setAcesso] = useState(false);

    const handleInput = (e, key) => {
        setCliente({...client, [key]: e.target.value})
    }

    const handleInputPlanos = async () => {
      const clientes = await getClientes()
      const user = clientes[clientes.length-1]
      window.location.href=`/planos/${user.id}`
    }
        
    const requisicao = async e => {
      e.preventDefault();

      if(!validate()) return;
      
      setCliente({
        cliente: client.cliente,
        email: client.email,
        senha: client.senha,
        planos: client.planos
      })

      const response = await adicionaAssinaturas(client)

      if(response){
        setStatus({
            type:'success',
            mensagem: 'Usuário cadastrado com sucesso!'
        })

        setCliente({
          cliente: '',
          email: '',
          senha: '',
          planos: ''
        });

        setAcesso(true)

      }else{
        setStatus({
            type:  'error',
            mensagem: 'Error: Usuário não cadastrado com sucesso!'
        })
      }
    }

    const validNome = (nome) => {
      return /[^a-zà-ú]/gi.test(nome)
    }

    const validEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email)
    }

    const validSenha = (senha) => {
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(senha)
    }

    const validate = () => {
      if(!validNome(client.cliente)) return setStatus({type: 'error', mensagem: '⛔ Necessário preencher o campo nome!'})
      
      if(!validEmail(client.email)) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo email! corretamente'})

      if(!validSenha(client.senha)) return setStatus({type: 'error', mensagem: '⛔ Sua senha precisa ter: 8 caracteres min, 1Letra maiuscula, 1Numero, 1Simbolo($*&@#)'})

      return true
    }

  return (
    <div className={S.containerForm}>
        { acesso ? (
            <div className={S.sucessoCadastro}>
              <h1 className={S.textSucesso}>Parabéns! Você foi cadastrad@. Agora clique o botão para escolher seu plano :D </h1>
              <input className={S.enviar} type="button" value="Escolher meu plano" onClick={handleInputPlanos}/>   
            </div>
        ) : (
            <div className={S.form}>

                {status.type === 'success' ? <p className={S.error} style={{color: 'green'}}>{status.mensagem}</p> : ''}

                {status.type === 'error' ? <p className={S.error} style={{color: '#ff0000'}}>{status.mensagem}</p> : ''}

                <h1 className={S.titulo}>Faça seu cadastro!</h1>

                <div className={S.linha}></div>

                <input className={S.input} placeholder='Digite seu nome' type="text" name="cliente" id="cliente" value={client.cliente} onChange={(e) => handleInput(e, 'cliente')}/>

                <input className={S.input} placeholder='Digite seu email' type="email" name="email" id="email" value={client.email} onChange={(e) => handleInput(e, 'email')} />

                <input className={S.input} placeholder='Digite sua senha' type="password" id='senha' name='senha' value={client.senha} onChange={(e) => handleInput(e, 'senha')} />

                <h2 className={S.linkLogin}>Já tem conta? <Link to={'/login'}>Faça login</Link></h2>
                
                <button className={S.enviar} onClick={requisicao}>Registrar</button>
            </div>
        )}
    </div>
  )
}

export default FormCadastroAssinaturas