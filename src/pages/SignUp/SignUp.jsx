import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import "../SignUp/SignUp.css"
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  displayName: yup.string().required(),
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
      let res = await fetch('http://localhost:5500/register', requestOptions);
      let resStatus = res.status;
      console.log(resStatus);
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
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(submitForm)}>   
        <input type="text" name='displayName' placeholder='Display Name...' {...register("displayName")}/>
        <p>{errors.displayName && "Display Name is a required field"}</p>

        <input type="email" name='email' placeholder='Email...' {...register("email")}/>
        <p>{errors.email?.message}</p>

        <input type="text" name='username' placeholder='Username...' {...register("username")}/>
        <p>{errors.username?.message}</p>

        <input type="password" name='password' placeholder='Password...' {...register("password")}/>
        <p>{errors.password?.message}</p>

        <input type="password" name='confirmPassword' placeholder='Confirm Password...' {...register("confirmPassword")}/>
        <p>{errors.confirmPassword && "Passwords must match"}</p>


        <input type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}

export default SignUp