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
      const res = await axios.post("https://loan-thandal-tracker-backend.onrender.com/user/login",Login,{withCredentials:true})
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
    <div className=" bg-gray-100 to-white flex mt-10 mb-8 lg:mt-4">
        {/* left side only laptop view */}

        <div className="hidden lg:flex w-1/2 flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-blue-800">Loan Tracker</h1>
            <p className="text-xl text-gray-600 mt-4">Track Loans & Manage Payments</p>
            <div className="mt-8 bg-blue-200 p-10 rounded-full">💰</div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className= "font-bold text-2xl lg:text-4xl flex justify-center items-center">Welcome Back</h1>
     <div className="p-4 bg-white rounded-lg">
        <div className="mt-3">
            <h1 className="text-1xl font-bold">Email</h1>
            <input type="email" placeholder="Enter your Email" value={Login.email} name="email" onChange={handleChange} className="w-full bg-blue-50 p-4 rounded-xl mt-2 outline-none border border-transparent focus:border-blue-500 transition"/>
        </div>
        <div className="mt-3">
            <h1 className="text-1xl font-bold">Password</h1>
            <div className="relative mt-2">
            <input type={showPassword?"text":"password"} placeholder="Enter your Password" value={Login.password} name="password" onChange={handleChange} className="w-full bg-blue-50 p-4 rounded-xl mt-2 outline-none border border-transparent focus:border-blue-500 transition"/>
            <button type="button" onClick={()=>setshowPassword(!showPassword)} className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-600">{showPassword?<Eye/>:<EyeOff/>}</button>
            </div>
            <h1 className="text-blue-800 text-right">Forgot password?</h1>
        </div>
        <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 transition p-4 cursor-pointer rounded-xl mt-4 text-white font-bold">Login</button>
     
     <div className="flex gap-2 items-center justify-center mt-3 ">
        <p className="">Don't have an account?</p>
        <NavLink to="/signup"><h1 className="text-blue-800 ">Signup</h1></NavLink>
        </div>
     </div>
     
     </div>
        </div>
        </div>
      <ToastContainer/>
     </form>
    )
}
export default Login;