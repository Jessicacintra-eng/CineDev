import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import s from "./Serie.module.css";
import { getSeriesID } from "../../Services/API";
import { useParams } from "react-router-dom";

const Serie = () => {
  const parametro = useParams();
  // console.log(parametro.idSerie)
  const [serie, setSerie] = useState(" ");

  useEffect(() => {
    const request = async () => {
      const response = await getSeriesID(parametro.idSerie.toString());
      console.log(response);
      setSerie(response);
    };
    request();
  }, [parametro]);
  console.log(serie);

  return (
    <main className={s.paginaSerie}>
      <Header />

          <section className={s.poster}>
            <img
              className={s.imagem}
              src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`}
              alt=""
            />
          </section>
          <section className={s.info}>

        <div className={s.contTitulo}>

         <div className={s.titulo}> <h1> {serie.name} - {serie.first_air_date}  </h1>  </div>
          </div>
         <div className={s.descricao}>
         <p> {serie.overview}</p>
         </div>

       <div className={s.infos_menores}>

       <div className={s.temporadas}> <h2> Temporadas  </h2>
       <h2 className={s.destaque}>{serie.number_of_seasons} </h2>
         </div>
         <div className={s.episodios}> <h2> Número de Episódios  </h2> 
         <h2 className={s.destaque}> {serie.number_of_episodes} </h2></div>
        
         <div className={s.avaliacao}> <h2> Avaliação </h2>
         <h2 className={s.destaque}> {serie.vote_average} </h2> </div>
         
        </div> 
        <div className={s.botaoAssistir}> 
         <button> Assistir </button>
        </div>
       </section>
    </main>
  );
};

export default Serie;
