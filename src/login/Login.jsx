import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Login(){
    const [showPassword,setshowPassword]=useState(false);
    const [Login,setLogin]=useState({
        email:"",
        password:""
    })
    const navigate =useNavigate();
    const handleSubmit=async(e)=>{
        try{
      e.preventDefault();
        if(Login.email==""){
            return toast.error("Plesae fill the name");
        }
            if(Login.password==""){
           return toast.error("Plesae fill the password");
        }
      const res = await axios.post("http://localhost:5000/user/login",Login,{withCredentials:true})
      if(res.status==200){
        toast.success("Login Successfull")
        setLogin({
            email:"",
            password:""
        })
        setTimeout(()=>{
       navigate("/")
        },2000)

      }
        }catch(err){
         toast.error(err.response.data.message)
         console.log(err)
        }

    }
    const handleChange=(e)=>{
        setLogin({...Login,[e.target.name]:e.target.value})
    }

    return(
     <form action="" onSubmit={handleSubmit}>
    <div className="p-6">
        <h1 className= "font-bold text-2xl flex justify-center items-center">Welcome Back</h1>
     <div className="mt-4 p-4 bg-white rounded-lg">
        <div className="mt-3">
            <h1 className="text-1xl font-bold">Email</h1>
            <input type="email" placeholder="Enter your Email" value={Login.email} name="email" onChange={handleChange} className="w-full bg-blue-100 p-4 rounded-lg mt-2 outline-none border-none"/>
        </div>
        <div className="mt-3">
            <h1 className="text-1xl font-bold">Password</h1>
            <div className="relative mt-2">
            <input type={showPassword?"text":"password"} placeholder="Enter your Password" value={Login.password} name="password" onChange={handleChange} className="w-full bg-blue-100 p-4 rounded-lg   outline-none border-none"/>
            <button type="button" onClick={()=>setshowPassword(!showPassword)} className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-600">{showPassword?<Eye/>:<EyeOff/>}</button>
            </div>
            <h1 className="text-blue-800 text-right">Forgot password?</h1>
        </div>
        <button type="submit" className="w-full bg-blue-700 p-4 cursor-pointer rounded-full mt-3 text-white font-bold flex items-center justify-center gap-2">Login</button>
     </div>
     <div className="flex gap-2 items-center justify-center mt-3">
        <p className="">Don't have an account?</p>
        <NavLink to="/signup"><h1 className="text-blue-800 ">Signup</h1></NavLink>
     </div>
     
     </div>
      <ToastContainer/>
     </form>
    )
}
export default Login;