import axios from "axios";

const api = axios.create({
  baseURL: "https://cinediva.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": 'true'
  },
});

export const getAssinaturas = async (id) => {
  try {
    const response = await api.get(`/assinaturas/${id}`)
    const json = await response.data[0]
    return json

  } catch (error) {
    console.log(error);
    return error
  }
}

export const adicionaAssinaturas = async (data) => {
  try {
    return await api.post('/assinaturas/novaAssinatura', data)
  } catch (error) {
    
    console.log(error);
    return error
  }
};

export const alteraAssianturas = async (id, body) => {
  try {
    return await api.put(`/assinaturas/${id}`, body)

  } catch (error) {
    console.log(error);
    return error
  }
};

//// - jess
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
export const deletarCliente = async (id) => {
  try {
    return await api.delete(`/assinaturas/${id}`);

  } catch (error) {
    console.log(error);
    return error
  }
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
export const getSeries= async () => {
  try {
  const url = "https://api.themoviedb.org/3/discover/tv?api_key=79d5524a687b79f90d3ca38d4644f9d6&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_keywords=lgbt&with_watch_monetization_types=flatrate&with_status=0&with_type=0"
  const response = await axios.get(url);
    const series = response.data.results;
    console.log(series)
    return series;
  } catch (erro) {
    console.log(erro);
  }
};


