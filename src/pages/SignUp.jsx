import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";


const schema = yup.object().shape({
  Email: yup.string().email().required(),
  DisplayName: yup.string().required(),
  Username: yup.string().required(),
  Password: yup.string().required().min(7),
  confirmPassword: yup.string().oneOf([yup.ref("Password"), null])
})

function SignUp() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = (data) => {
    console.log(data);
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(submitForm)}>   
        <input type="text" name='DisplayName' placeholder='Display Name...' {...register("DisplayName")}/>
        <p>{errors.DisplayName && "Display Name is a required field"}</p>

        <input type="email" name='Email' placeholder='Email...' {...register("Email")}/>
        <p>{errors.Email?.message}</p>

        <input type="text" name='Username' placeholder='Username...' {...register("Username")}/>
        <p>{errors.Username?.message}</p>

        <input type="password" name='Password' placeholder='Password...' {...register("Password")}/>
        <p>{errors.Password?.message}</p>

        <input type="password" name='confirmPassword' placeholder='Confirm Password...' {...register("confirmPassword")}/>
        <p>{errors.confirmPassword && "Passwords must match"}</p>


        <input type="submit" value="Sign Up"/>
      </form>
    </>
  )
}

export default SignUp