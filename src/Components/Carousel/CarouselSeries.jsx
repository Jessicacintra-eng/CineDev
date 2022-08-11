import React from "react";
import { getSeries } from "../../Services/API.js";
import { useEffect, useState, useRef } from 'react';
import  './Carousel.css'
import CardFilme from "../Card/CardFilme.jsx";
import { useNavigate } from "react-router-dom";

const CarouselSeries= () => {
  const navigate = useNavigate()
  const carousel = useRef(null);
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const request = async () => {
      const response = await getSeries();
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
       <div className="buttons 1">
       <button onClick={handleLeftClick}>
          <img className="seta" src="https://mcusercontent.com/8d01a411f692a38c571bf7140/images/c7f63a96-f6d4-218d-d436-763fb43f5f7e.png" alt="" srcset="" />
        </button>
        </div>
      <div className="carousel" ref={carousel}>
        {produtos.map((item) => {
          const { id, name, first_air_date ,vote_average, poster_path, overview} = item;
          return (
            <CardFilme
            id = {id}
            nomeDoFilme = {name} 
            anoLancamento = {first_air_date.split("-").slice(0,1)} 
            urlCartaz = {poster_path} 
            notas = {vote_average}
            descricaoDoFilme= {overview}
            details={(e)=>{e.preventDefault();navigate(`/serie/${id}`)}}
            />
          );
        })}
      </div>
      <div className="buttons 2">
        <button onClick={handleRightClick}>
          <img className="seta" src="https://mcusercontent.com/8d01a411f692a38c571bf7140/images/555afc6c-5df7-092b-0b5d-658267be9b88.png" />
        </button>
      </div>
    </div>
  );
};

export default CarouselSeries;

