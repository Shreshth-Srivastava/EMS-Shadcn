import React, { useEffect, useState } from 'react'
import { LoginForm } from '@/components/login-form'

// interface LoginProps {
//   handleLogin: (email: string, password: string) => void;
//   data: Object;
// }

// const Login: React.FC<LoginProps> = ({ handleLogin, data }) => {
const Login = ({ handleLogin, data }:{handleLogin:(email: string, password: string)=> void, data:any}) => {
  const [employees, setEmployees] = useState([]);
  const [admin, setAdmin] = useState([]);
  
  useEffect(() => {
    if(data){
      setEmployees(data.employees);
      setAdmin(data.admin);
    }
  }, [data])
  
  return (
    <div className='dark w-screen h-max md:h-screen flex flex-col md:flex-row justify-center items-center gap-4 p-4'>
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center gap-4'>
        <div className='w-full bg-[hsl(0,0%,20%)] p-4 rounded'>
          <h1 className='text-xl'>Employees Credentials</h1>
          <div>
          <br />
          <div className='w-full grid grid-cols-[1fr_4fr_1fr] gap-4 lg:text-lg'>
            <p>Name</p>
            <p>Email</p>
            <p>Password</p>
          </div>
          <br />
          </div>
          {employees ?
            employees.map((e:any, idx)=>{
              return(
                <div key={idx} className='w-full grid grid-cols-[1fr_4fr_1fr] gap-4 text-xs lg:text-base'>
                  <p>{e.firstName}</p>
                  <p>{e.email}</p>
                  <p>{e.password}</p>
                </div>
              )
            })
          : "hello"}
        </div>

        <div className='w-full bg-[hsl(0,0%,20%)] p-4 rounded'>
          <h1 className='text-xl'>Admin Credentials</h1>
          <div>
          <br />
          <div className='w-full grid grid-cols-[1fr_4fr_1fr] gap-4 lg:text-lg'>
            <p>Name</p>
            <p>Email</p>
            <p>Password</p>
          </div>
          <br />
          </div>
          {employees ?
            admin.map((e:any, idx)=>{
              return(
                <div key={idx} className='w-full grid grid-cols-[1fr_4fr_1fr] gap-4 text-xs lg:text-base'>
                  <p>{e.firstName}</p>
                  <p>{e.email}</p>
                  <p>{e.password}</p>
                </div>
              )
            })
          : "hello"}
        </div>
      </div>
      
      <div className="w-full max-w-sm">
        <LoginForm handleLogin={handleLogin} />
      </div>
    </div>
  )
}

export default Login
