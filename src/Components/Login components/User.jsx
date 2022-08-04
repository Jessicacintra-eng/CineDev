import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getClientes } from "../../Services/API.js";
import Button from "../Button/Button.jsx";

const User = () => {
  const [DadosLogin, setDadosLogin] = useState({
    Email: "",
    Senha: "",
  });
  const params = useParams();

  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await getClientes(params.clientes);

      setCliente(response);
    };
    request();
  }, [params.clientes]);

  function validaDadosComBD() {
    const x =
      !!cliente &&
      cliente.filter((cliente) => {
        if (
          DadosLogin.Email == cliente.EMAIL &&
          DadosLogin.Senha == cliente.PASSWORD
        ) {
          return cliente.EMAIL;
        }
      });
    console.log(x);
    x.length > 0 ? <Link to="" /> : alert("Email ou senha não cadastrados");
  }

  function handleInputDados(target, key) {
    setDadosLogin({
      ...DadosLogin,
      [key]: [target.value],
    });
  }

  return (
    <form>
      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        value={DadosLogin.Email}
        onChange={({ target }) => handleInputDados(target, "Email")}
        required
        placeholder="Email"
        // onInvalid="this.setCustomValidity('Digite seu email cadastrado)"
        // onInput="this.setCustomValidity('')"
      />
      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        value={DadosLogin.Senha}
        onChange={({ target }) => handleInputDados(target, "Senha")}
        required
        placeholder="Senha"
        // onInvalid={this.setCustomValidity('Digite a senha')}
        // onInput={this.setCustomValidity('')}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          validaDadosComBD();
        }}
      >
        Validar
      </button>
    </form>
  );
};

export default User;
