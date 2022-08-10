import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClientes } from "../../Services/API.js";
import Button from "../Button/Button.jsx";
import s from "./User.module.css";
import { Link } from "react-router-dom";
import Claquete from "../../assets/Claquete.svg";
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

const User = () => {
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    setTimeout(()=>{
      setIsOpen(false);
    },[3000])
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [DadosLogin, setDadosLogin] = useState({
    Email: "",
    Senha: "",
  });
  const params = useParams();

  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await getClientes(params.assinaturas);

      setCliente(response);
    };
    request();
  }, [params.assinaturas]);
  
  let idAutenticado
  function validaDadosComBD() {
    
    const x =
      !!cliente &&
      cliente.filter((cliente) => {
        if (
          DadosLogin.Email == cliente.email &&
          DadosLogin.Senha == cliente.senha
        ) {
          idAutenticado= cliente.id
          return idAutenticado;
        }
      })
    console.log(x);
    x.length > 0

      ?  navigate(`/films/${idAutenticado}`)
      : alert("Email ou senha não cadastrados");
  }

  function handleInputDados(target, key) {
    setDadosLogin({
      ...DadosLogin,
      [key]: [target.value],
    });
  }

  return (
    <form>
      <img src={Claquete} className={s.imagemClaquete} alt="" />
      <div className={s.divEmail}>
        {/* <label htmlFor="email">E-mail:</label> */}
        <input
          type="email"
          name="email"
          value={DadosLogin.Email}
          onChange={({ target }) => handleInputDados(target, "Email")}
          required
          placeholder="Email"
          // onInvalid="this.setCustomValidity('Digite seu email cadastrado)"
          // onInput="this.setCustomValidity('')"
          className={s.input}
        />
      </div>
      <div className={s.divSenha}>
        {/* <label htmlFor="password">Senha:</label> */}
        <input
          type="password"
          value={DadosLogin.Senha}
          onChange={({ target }) => handleInputDados(target, "Senha")}
          required
          placeholder="Senha"
          // onInvalid={this.setCustomValidity('Digite a senha')}
          // onInput={this.setCustomValidity('')}
          className={s.input}
        />
      </div>

      {/* <small class="span-usuario-senha">
              Usuario ou senha inválidos, digite novamente.
            </small> */}
      <button
        onClick={(event) => {
          event.preventDefault();
          validaDadosComBD();
         
                }}
        className={`${s.btnEntrar} ${s.button85}`}
      >
        Entrar
      </button>
      <button
        onClick={()=>{
          alert("Se você estiver cadastrado recebera um email!")
        }
          // openModal
        }
        className={s.LinkSenha}
      >
        Esqueci a senha
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={s.caixaDontLeaveME}>

        <h2>
          Hey!
        <p> Se você estiver cadastrado recebera um email!</p>
        </h2>
        <button className={s.buttonModal} onClick={closeModal}>OK</button>
        </div>
      </Modal>
      <div className={s.LinkRegistrar}>
        <Link to="/cadastro" className={s.LinkRegistrarI}>
        Não tem conta?
          <p className={s.textLinKRegister}> Cadastre-se! </p>
        </Link>
      </div>

      {/* <a href="#" id="link-esqueci">Esqueci a senha</a>
                <p>Ainda não tem uma conta? <a href="#">Cadastre-se</a></p> */}
    </form>
  );
};

export default User;
