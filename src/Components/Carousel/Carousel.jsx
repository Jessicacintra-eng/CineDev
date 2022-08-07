
import React, { useEffect, useState } from 'react'
import api from '../../API/api';
import S from './Carousel.module.css'

const Carousel = () => {

    const [filmData, setFilmData] = useState({});

    useEffect(() => {
        handleGetFilmData();
    }, []);

    async function handleGetFilmData () {
        const response = await fetch('https://api.themoviedb.org/3/keyword/158718/movies?api_key=79d5524a687b79f90d3ca38d4644f9d6&language=pt-BR&include_adult=true');
        const data = await response.json();
        setFilmData(data);
        console.log(data)
    }


  return (
    <div className='container'>
        <div className='carousel'>
            <div className='item'>
                <div className='image'>
                    <img src="" alt="" />
                </div>
                <div className='tilte'></div>
                <div className='btn'>
                <button>Ver Detalhes</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel