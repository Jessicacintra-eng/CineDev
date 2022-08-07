import React from "react";
import Card from "../Card/Card";
import { LoremIpsum } from "react-lorem-ipsum";
import s from './Plans.modules.css'

const Plans = () => {
  return (
    <section className={s.cards}>
      <Card
        nomeDoPlano={"Free"}
        descricaoDoPlano={<LoremIpsum p={1} />}
        link={"/register"}
      />
       <Card
        nomeDoPlano={"Single"}
        descricaoDoPlano={<LoremIpsum p={1} />}
        link={"/register"}
      />
       <Card
        nomeDoPlano={"Family"}
        descricaoDoPlano={<LoremIpsum p={1} />}
        link={"/register"}
      />
    </section>
  );
};
export default Plans;
