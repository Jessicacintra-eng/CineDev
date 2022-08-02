import React from 'react'
import {Link} from 'react-router-dom'
import Password from '../../Components/Login components/Password'
import User from '../../Components/Login components/User'

const Login = () => {
  return (
    <div>
      <User/>
      <Password/>
      <Link to='../ClientArea' />
    </div>
  )
}

export default Login