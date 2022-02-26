/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import {useAuth} from "../context/authContext"; 
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Login() {

const [user , setUser] = useState({
  email: '',
  password: ''
});

const { login, LoginWithGoogle , resetPassword} = useAuth()
const navigate = useNavigate()
const [error,setError] = useState()

const handleChange = ({target: {name, value}}) => {
  setUser({...user ,[name]: value})
}

const handleSubmit = async e => {
  e.preventDefault()
  setError('')
try {
 await login(user.email, user.password)
  navigate('/')

} catch (error) {
  setError(error.message)
}
}

const handleGoogleSignin = async  () => {
try {
  await LoginWithGoogle()
  navigate("/") 
} catch (error) {
  setError(error.message)
}
}

const handleReset = async() => {
  if (!user.email) return setError('Please enter your email')
  try {
    await resetPassword(user.email)
    setError('we sent you an email with a link to reset your password')
  } catch (error) {
    setError(error.message)
  }
}

  return (
     <div className="w-full max-w-xs m-auto">

       
       {error && <Alert message={error}/>}
           <form onSubmit={handleSubmit} className="bg-white
           shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div className="mb-4">
      <label htmlFor="email" className="bloch text-gray-700
      text-sm font-bold mb-2">Email</label>
      <input type="email" name="email"
       placeholder="youremail@company.com"
       className="shadow appereance-none border rounded
       w-full py-2 px-3 text-gray-700 leading-tight
       focus:outline-none focus:shadow-outline"
      onChange={handleChange}/>
      </div>

    <div className="mb-4">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password"
       placeholder="*******"
       className="shadow appereance-none border rounded
       w-full py-2 px-3 text-gray-700 leading-tight
       focus:outline-none focus:shadow-outline"
      onChange={handleChange}/>
    </div>


    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700
      text-white text-sm font-bold py-2 px-4 rounded 
      focus:outline-none focus:shadow-outline">Login</button>

      <a href="#!" onClick={handleReset} className="inline-block align-baseline font-bold text-sm text-blue-500
      hover:text-blue-800">Forgot Password ?</a>
    </div>
    </form>
    
    <p className="my-4 text-sm flex justify-between">Don't have a Account <Link to="/register">Register</Link></p>

    <button onClick={handleGoogleSignin} className="bg-slate-50 hover:bg-slate-200 text-black
    shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full">Google Login</button>
     </div>
  )
}
