import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getClientesComID,deletarCliente } from '../../Services/API'

const ClientArea = () => {
  const [DadosLogin, setDadosLogin] = useState({
    id:'',
    cliente:'',
    email: "",
    senha: "",
  });
  const params = useParams();
  console.log(params)

  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await getClientesComID(params.id);
      console.log(response)

      setCliente(response);
    };
    request();
  }, [params.id]);

  function handleDelete(){
 
      deletarCliente(params.id)
      window.alert(`Conta deletada com sucesso `)
      window.location.href='/'      
    
  }
  return (
    <main>  
    <div>cabeçalho</div>
    <section>
    {!!cliente && cliente.map(cliente => {
          return (
            // <img src={imagemDoCliente}></img>
            <section key={cliente.id}>
              <h1>{cliente.id}</h1>
              <h2>{cliente.cliente}</h2>
              <p>{cliente.email}</p>
            </section>
            
        )})}
   
    </section>


    <section>
    <button onClick={(e)=>{e.preventDefault; handleDelete()}}>Excluir conta</button>
    <button oncClick={(e)=>{e.preventDefault; window.location.href='/'}}>Alterar detalhes</button>
    </section>
    </main>
  )
}

export default ClientArea