import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

const schema = yup.object().shape({
  Username: yup.string().required(),
  Password: yup.string().required().min(7)
})



function SignIn() {
  const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
    });

  const submitForm = (data) => {
    console.log(data);
  }
  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <input type="text" name='Username' placeholder='Username...' {...register("Username")}/>
        <p>{errors.Username?.message}</p>

        <input type="password" name='Password' placeholder='Password...' {...register("Password")}/>
        <p>{errors.Password?.message}</p>

        <input type="submit" value="Sign In"/>
      </form>
    </>
    
  )
}

export default SignIn