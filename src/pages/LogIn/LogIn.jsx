import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import "../LogIn/LogIn.css"
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  })
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
    });

  const submitForm = async (data) => {
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
            navigate('/');
            
          }else{
            console.log("Wrong username or password")
          }
      } catch (err){
          console.log(err);
      }
    
    console.log(data);
  }
  return (
    <div id="LogIn_container">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <input type="text" name='username' placeholder='Username...' {...register("username")}/>
        <p>{errors.Username?.message}</p>

        <input type="password" name='password' placeholder='Password...' {...register("password")}/>
        <p>{errors.Password?.message}</p>

        <input type="submit" value="Sign In"/>
      </form>
    </div>
    
  )
}

export default LogIn