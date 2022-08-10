import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import S from './deletarDados.module.css'
import { deletarCliente } from '../../../Services/API'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const DeletarDados = () => {
  const navigate = useNavigate()
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [SashayIsOpen, setSashay] = useState(false);
  const [ShantayIsOpen, setShantay] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openSashay(){
    setSashay(true);
  }
  function openShantay(){
    setIsOpen(false);
    setShantay(true);
  }

  function closeModal() {
    setIsOpen(false);
    setShantay(false);
  }
  function closeModalAndStay(){
    setShantay(true);
  }
  
  const { id } = useParams()

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })
  
  const requisicao = async () => {
    const response = await deletarCliente(id)

    if(response){
      setStatus({
        type: 'sucess',
        mensagem: 'Conta deletada com com sucesso!'
      })
    }
  }
  const closeModalAndGoHome = ()=>{
    requisicao()
    setIsOpen(false);
    openSashay(true)
    setTimeout(()=>{
      navigate(`/`)
    },[2000])  
  }

  return (
    <div className={S.buttonDelete}>

        <input type="button"  onClick={openModal} className={S.deletar} value='⛔ Deletar conta ⛔'/>

        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={S.caixaDontLeaveME}>

        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          Hey!
        <p> Tem ceterza que deseja nos abandonar?</p>
        </h2>
        <button className={S.buttonModal} onClick={closeModalAndStay}>JAMAIS</button>
        <button className={S.buttonModal}onClick={closeModalAndGoHome}>SASHAY AWAY</button>
        </div>
      </Modal>
      <Modal
       isOpen={SashayIsOpen}
      //  onAfterOpen={afterOpenModal}
       onRequestClose={closeModal}
       style={customStyles}
       contentLabel="Example Modal">
       <div className={S.caixaSashay}>
        {status.type === 'sucess'? <p className={S.mensagemDelete}>{status.mensagem}</p>  : ''}
        <h1> SASHAY AWAY </h1>
        <p> 'Conta deletada com com sucesso!</p>
       </div>

      </Modal>
      <Modal
       isOpen={ShantayIsOpen}
      //  onAfterOpen={afterOpenModal}
       onRequestClose={closeModal}
       style={customStyles}
       contentLabel="Example Modal">
       <div className={S.caixaShantay}>
        <h1> SHANTAY YOU STAY</h1>
        <p> Agora vai ver um filminho, beijos!</p>
        <button className={S.buttonModal} onClick={closeModal}>Bye Gurl</button>
       </div>

      </Modal>
      
    </div>
  )

}
export default DeletarDados