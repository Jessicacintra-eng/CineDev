import axios from "axios";
const api = axios.create({
  baseURL: "https://cinediva.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": 'true'
  },
});

export const getClientes = async () => {
  try {
    const response = await api.get("/assinaturas");
    const clientes = await response.data.sign;
    console.log(clientes)
    return clientes;
  } catch (erro) {
    console.log(erro);
  }
};

export const getClientesComID = async (idCliente) => {
  try {
    const response = await api.get(`/assinaturas/${idCliente}`);
    const clientes = await response.data;
    console.log(clientes)
    return clientes;
  } catch (erro) {
    console.log(erro);
  }
};

export const deletarCliente = async (id) => {
  const response = await api.delete(`/assinaturas/${id}`);
  const msg= "Conta excluída com com sucesso"
  return alert(msg);
};


  // const config = {
  //   params: {
  //     api_key: 'api-79d5524a687b79f90d3ca38d4644f9d6',
  //     language:'pt-BR',
  //     include_adult:'true'
  //   },
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Content-Type": "text/plain",
  //   },
  // };
  // const instance = axios.create({
  //   baseURL: "https://api.themoviedb.org/3",
  //   https: config,
  // });
  // export const getFilmes = async () => {
  //   const key= '79d5524a687b79f90d3ca38d4644f9d6'
  //     try {
  //     const response = await instance.get(`/keyword/158718/movies?api_key=${key}`);
  //       const Filmes = await response.data.results;
  //       console.log(Filmes)
  //       return Filmes;
  //     } catch (erro) {
  //       console.log(erro);
  //     }
    
  //   };
  //   getFilmes()


export const getFilmes = async () => {
  try {
  const url = "https://api.themoviedb.org/3/keyword/158718/movies?api_key=79d5524a687b79f90d3ca38d4644f9d6&language=pt-BR&include_adult=true"
  const response = await axios.get(url);
    const Filmes = response.data.results;
    console.log(Filmes)
    return Filmes;
  } catch (erro) {
    console.log(erro);
  }
};




