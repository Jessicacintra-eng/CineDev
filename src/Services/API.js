import axios from "axios";
const api = axios.create({
  baseURL: "https://cinedevjessica.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getEmail = async () => {
  try {
    const response = await api.get("/clientes");
    const email = await response.data.EMAIL;
    return email;
  } catch (erro) {
    console.log(erro);
  }
};
export const getPassword = async () => {
  try {
    const response = await api.get("/clientes");
    const senha = await response.data.PASSWORD;
    return senha;
  } catch (erro) {
    console.log(erro);
  }
};
export const putNewClient = async () => {
  try {
    const response = await api.put("/clientes", {
      NAME: 'USUARIO TESTE',
      EMAIL: 'USUARIO@TESTE',
      PASSWORD: '12345',
      PAYMENT:'100,00',
      CLUB:'NO'
  });
  return response.data
  } catch (erro) {
    console.log(erro);
  }
};

