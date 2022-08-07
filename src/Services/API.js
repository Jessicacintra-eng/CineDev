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


