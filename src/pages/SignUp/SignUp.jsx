import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import "../SignUp/SignUp.css"
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  //displayName: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required().min(7),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

function SignUp() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();


  const submitForm = async (data) => {
    try{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include'
      }
      let res = await fetch('https://quotera.herokuapp.com/register', requestOptions);
      let resStatus = res.status;
      console.log(JSON.stringify(data))
      if(resStatus===201) {
        navigate('/log-in');
      }else{
        console.log("Invalid data")
      }
    } catch (err){
      console.log(err);
    }
  }

  return (
    <div id="SignUp_container">
      <h1 id='SignUp_heading'>Sign Up</h1>
      <form onSubmit={handleSubmit(submitForm)}>   
        {/* <input id='SignUp_input' type="text" name='displayName' placeholder='Display Name...' {...register("displayName")}/>
        <p>{errors.displayName && "Display Name is a required field"}</p> */}

        <input id='SignUp_input' type="email" name='email' placeholder='Email...' {...register("email")}/>
        <p>{errors.email?.message}</p>

        <input id='SignUp_input' type="text" name='username' placeholder='Username...' {...register("username")}/>
        <p>{errors.username?.message}</p>

        <input id='SignUp_input' type="password" name='password' placeholder='Password...' {...register("password")}/>
        <p>{errors.password?.message}</p>

        <input id='SignUp_input' type="password" name='confirmPassword' placeholder='Confirm Password...' {...register("confirmPassword")}/>
        <p>{errors.confirmPassword && "Passwords must match"}</p>


        <input id='SignUp_button' type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}

export default SignUp