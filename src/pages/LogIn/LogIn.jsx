import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import "../LogIn/LogIn.css"
import { useNavigate } from 'react-router-dom';

function LogIn() {

  const [failureStatus, setFailureStatus] = useState(false)
  
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  })
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
    });

  const submitForm = async (data) => {      
    setFailureStatus(false);

      try{
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            credentials: 'include'
          };
          let res = await fetch('http://localhost:5500/login', requestOptions);
          let resStatus = res.status;
          if(resStatus===201) {
            setFailureStatus(false)

            navigate('/');
            
          }else{
            console.log("Wrong username or password")
            setFailureStatus(true)
          }
      } catch (err){
          console.log(err);
      }
    
    console.log(data);
  }
  return (
    <div id="LogIn_container">
      <h1 id='LogIn_heading'>Log In</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <input id='LogIn_input' type="text" name='username' placeholder='Username...' {...register("username")}/>
        <p>{errors.username?.message}</p>

        <input id='LogIn_input' type="password" name='password' placeholder='Password...' {...register("password")}/>
        <p>{errors.password?.message}</p>
        <p style={{display: (failureStatus? 'block' : 'none')}}>Wrong password or username</p>

        <input id='LogIn_button' type="submit" value="Sign In"/>
      </form>
    </div>
    
  )
}

export default LogIn