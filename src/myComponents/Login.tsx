import React, { useEffect, useState } from 'react'
import { LoginForm } from '@/components/login-form'
import { Meteors } from "@/components/ui/meteors";
import { BackgroundBeamsWithCollision  } from "@/components/ui/background-beams-with-collision";

interface LoginProps {
  handleLogin: (email: string, password: string) => void;
  data: any; // Replace `any` with the actual type of `contextData`
}

const Login: React.FC<LoginProps> = ({ handleLogin, data }) => {
  // const [employees, setEmployees] = useState(null);
  // const [admin, setAdmin] = useState(null);
  
  // useEffect(() => {
  //   if(data){
  //     setEmployees(data.employees);
  //     setAdmin(data.admin);
  //   }
  // }, [data])
  
  return (
    <BackgroundBeamsWithCollision className='bg-black'>
    <div className="dark flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className='absolute md:w-1/3 flex items-center justify-center'>
        <div className="w-full max-w-sm">
          <LoginForm handleLogin={handleLogin}/>
        </div>
      </div>
      {/* <Meteors number={20} width={window.screen.width + 250}/> */}
    </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Login
