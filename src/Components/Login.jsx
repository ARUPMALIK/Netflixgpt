import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../assets/Utils/Validate'

const Login = () => {

    const[isSignIn, setisSignIn]= useState(true)

    const[message, setmessage] = useState(null)

    console.log(isSignIn)
    const HandleSignIn=()=>{
        setisSignIn(!isSignIn);
        console.log(isSignIn)
    }

    const email = useRef(null);
    const password = useRef(null);

    const HandleButtonClick =()=>{
        const msg = checkValidData(email.current.value, password.current.value);
        setmessage(msg);
    }

  return (
    <div className='w-full h-screen relative flex z-32 text-white'>
         <Header/>
            <div className=''>
             <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Back_Img" />
            </div>

            <form onSubmit={(e)=>(e.preventDefault())} className='w-3/12 p-12 absolute mx-auto my-36 left-0 right-0 bg-zinc-800' action="">
            <h1 className="text-xl">{isSignIn? "Sign In": "Sign Up"}</h1>
            { !isSignIn && (<input className='w-full m-2 p-2' type="text" placeholder='Name'/>)}
            <input ref={email}
            className='w-full m-2 p-2 bg-zinc-500' type="text" placeholder='Email Address' />
            <input ref={password}
            className='w-full m-2 p-2 bg-zinc-500' type="text" placeholder='Password'/>
            <button
            onClick={HandleButtonClick} className='w-full p-2 bg-red-500 m-2'>{isSignIn? "Sign In": "Sign Up"}</button>
            <p>{message}</p>
            <p className="cursor-pointer" onClick={HandleSignIn}>New to Netflix?    Sign Up</p>
            </form>
        
    </div>
  )
}

export default Login