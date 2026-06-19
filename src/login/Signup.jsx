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
        const res = await axios.post("http://localhost:5000/user/adduser",Signup)
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
    <div className="p-6">
        <h1 className= "font-bold text-2xl flex justify-center items-center">Sign Up</h1>
     <div className="mt-4 p-4 bg-white rounded-lg">
        <div className="mt-3">
            <h1 className="text-1xl font-bold">Full Name</h1>
            <div className="relative mt-2">
            <button type="button" className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600"><User/></button>
            <input type="text" placeholder="Enter your Password" value={Signup.name} name="name" onChange={handleChange} className="w-full bg-blue-100 p-4 rounded-lg   pl-12 outline-none border-none"/>

            </div>
        </div>
        <div className="mt-3">
            <h1 className="text-1xl font-bold">Email</h1>
            <div className="relative mt-2">
            <button type="button" className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600"><Mail/></button>
            <input type="email" placeholder="Enter your Password" value={Signup.email} name="email" onChange={handleChange} className="w-full bg-blue-100 p-4 pl-12 rounded-lg   outline-none border-none"/>
            </div>
        </div>
        <div className="mt-3">
            <h1 className="text-1xl font-bold">Password</h1>
            <div className="relative mt-2">
            <button type="button" className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600"><Lock/></button>
            <input type="text" placeholder="Enter your Password" value={Signup.password} name="password" onChange={handleChange} className="w-full bg-blue-100 p-4 rounded-lg   outline-none border-none pl-12"/>
            <button type="button" className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-600 cursor-pointer"></button>
            </div>
        </div>

        <button type="submit" className="w-full bg-blue-700 p-4 cursor-pointer rounded-full mt-3 text-white font-bold flex items-center justify-center gap-2"><UserPlus/>Create Account</button>
     </div>
     <div className="flex gap-2 items-center justify-center mt-3">
        <p className="">Already have an account?</p>
        <NavLink to="/login"><h1 className="text-blue-800 ">Login</h1></NavLink>
     </div>
     
     </div>
      <ToastContainer/>
     </form>
    )
}
export default Signup;