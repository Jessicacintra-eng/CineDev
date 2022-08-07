import React from "react";
import User from "../../Components/Login components/User";
import s from "./Login.module.css";
import Drag from "../../assets/dragbravo.svg";



const Login = () => {
  return (
      <div className={s.Login}>
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
