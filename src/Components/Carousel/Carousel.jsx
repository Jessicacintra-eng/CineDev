import React from "react";
import { getFilmes } from "../../Services/API.js";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import  './Carousel.css'

import { func } from "prop-types";
import CardFilme from "../Card/CardFilme.jsx";

const Teste = () => {
  const carousel = useRef(null);
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const request = async () => {
      const response = await getFilmes();
      console.log(response);
      setProdutos(response);
    };
    request();
  }, []);
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!produtos || !produtos.length) return null;

  return (
    <div className="container">
      <div className="carousel" ref={carousel}>
        {produtos.map((item) => {
          const { id, title, release_date,vote_average, poster_path, overview} = item;
          return (
            <CardFilme
            id = {id}
            nomeDoFilme = {title} 
            anoLancamento = {release_date.split("-").slice(0,1)} 
            urlCartaz = {poster_path} 
            notas = {vote_average}
            descricaoDoFilme= {overview}
            details={(e)=>{e.preventDefault(); alert("oi")}}
            />
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          ESQUERDA
        </button>
        <button onClick={handleRightClick}>
          DIREITA
        </button>
      </div>
    </div>
  );
};

export default Teste;

