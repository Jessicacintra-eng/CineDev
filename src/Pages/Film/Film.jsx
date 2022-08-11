import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import s from "./Film.module.css";
import { getFilmesID } from "../../Services/API";
import { useParams } from "react-router-dom";

const Film = () => {
  const parametro = useParams();
  // console.log(parametro.idFilme)
  const [filme, setFilme] = useState(" ");

  useEffect(() => {
    const request = async () => {
      const response = await getFilmesID(parametro.idFilme.toString());
      console.log(response);
      setFilme(response);
    };
    request();
  }, [parametro]);
  // console.log(filme);

  return (
    <main className={s.paginaFilme}>
      <Header />

          <section className={s.poster}>
            <img
              className={s.imagem}
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
              alt=""
            />
          </section>
          <section className={s.info}>

        <div className={s.contTitulo}>

         <div className={s.titulo}> <h1> {filme.title} - {filme.release_date}  </h1>  </div>
          </div>
         <div className={s.descricao}> 
         <p> {filme.overview}</p>
         </div>

       <div className={s.infos_menores}>

       <div className={s.duracao}> <h2> Duração </h2> 
       <h2 className={s.destaque}> {filme.runtime} min </h2> </div>

         <div className={s.avaliacao}> <h2> Avaliação </h2>
           <h2 className={s.destaque}> {filme.vote_average} </h2> </div>

        </div> 
        <div className={s.botaoAssistir}> 
         <button> Assistir </button>
        </div>
       </section>
    </main>
  );
};

export default Film;
