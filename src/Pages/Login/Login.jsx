import React from "react";
import User from "../../Components/Login components/User";
import s from "./Login.module.css";
import Drag from "../../assets/dragbravo.svg";

import Waves from "./Waves";

const Login = () => {
  return (
      <div className={s.Login}>
       {/* <div className={s.waves}>
       <Waves cor="red"/>
        <Waves cor="orange"/>
        <Waves cor="yellow"/>
        <Waves cor="green"/>
        <Waves cor="blue"/>
        <Waves cor="purple"/>
        </div>  */}
      <vr className={`${s.line} ${s.lineRed}`}/>
      <vr className={`${s.line} ${s.lineOrange}`}/>
      <vr className={`${s.line} ${s.lineYellow}`}/>
      <vr className={`${s.line} ${s.lineGreen}`}/>
      <vr className={`${s.line} ${s.lineBlue}`}/>
      <vr className={`${s.line} ${s.linePurple}`}/>
      <img src={Drag} className={s.Drag} alt="" />
      <div className={s.claquete}>
      
      <User/>
      </div>
    </div>
  );
};

export default Login;
