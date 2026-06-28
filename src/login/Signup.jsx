import axios from "axios"
import { ArrowBigRight, Eye, EyeOff, Lock, Mail, User, UserPlus } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"
function Signup(){
    const [Signup,setSignup]=useState({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const handleSubmit=async(e)=>{
        try{
        e.preventDefault();
                if(Signup.name==""){
            return toast.error("Plesae fill the name");
        }
            if(Signup.email==""){
           return toast.error("Plesae fill the email");
        }
            if(Signup.password==""){
            return toast.error("Plesae fill the password");
        }
        console.log(Signup)
        const res = await axios.post("https://loan-thandal-tracker-backend.onrender.com/user/adduser",Signup)
        setSignup({
            name:"",
            email:"",
            password:""
        })

        console.log(Signup)
        toast.success("User added Successfully")
        setTimeout(()=>{
        navigate("/login")
        },2000)
        }catch(err){
        if(err.response){
         toast.error(err.response.data.message)
        }else{
             console.log(err)
        }

    }
}
    const handleChange=(e)=>{
        setSignup({...Signup,[e.target.name]:e.target.value})

    }
    return(
<form action="" onSubmit={handleSubmit}>
    <div className="bg-gray-100 to-white flex mt-10 mb-8 lg:mt-0 lg:mb-0">

        <div className="hidden lg:flex w-1/2 flex-col justify-center items-center">
        <div className="text-center">
            <h1 className="text-5xl font-bold text-blue-800">Join loan tracker</h1>
            <p className="text-xl text-gray-600 mt-4">Create an account and manage your loans with ease</p>

            <div className="mt-8 text-8xl">📈</div>
        </div>

        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

        <h1 className= "font-bold text-2xl lg:text-4xl text-center">Sign Up</h1>
     <div className="p-4 bg-white rounded-lg">
        <div className="mt-1">
            <h1 className="text-1xl font-bold">Full Name</h1>
            <div className="relative mt-2">
            <button type="button" className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600"><User/></button>
            <input type="text" placeholder="Enter your Name" value={Signup.name} name="name" onChange={handleChange} className="w-full bg-blue-50 p-4 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition pl-12"/>

            </div>
        </div>
        <div className="mt-3">
            <h1 className="text-1xl font-bold">Email</h1>
            <div className="relative mt-2">
            <button type="button" className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600"><Mail/></button>
            <input type="email" placeholder="Enter your Email" value={Signup.email} name="email" onChange={handleChange} className="w-full bg-blue-50 p-4 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition pl-12"/>
            </div>
        </div>
        <div className="mt-3">
            <h1 className="text-1xl font-bold">Password</h1>
            <div className="relative mt-2">
            <button type="button" className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600"><Lock/></button>
            <input type="text" placeholder="Enter your Password" value={Signup.password} name="password" onChange={handleChange} className="w-full bg-blue-50 p-4 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition pl-12"/>
            <button type="button" className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-600 cursor-pointer"></button>
            </div>
        </div>

        <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 transition p-4 cursor-pointer rounded-xl mt-4 text-white font-bold flex items-center justify-center gap-2 shadow-md"><UserPlus/>Create Account</button>
     </div>
     <div className="flex gap-2 items-center justify-center mt-3">
        <p className="">Already have an account?</p>
        <NavLink to="/login"><h1 className="text-blue-800 ">Login</h1></NavLink>
     </div>
     
     </div>
             </div>
        </div>
      <ToastContainer/>
     </form>
    )
}
export default Signup;