import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'


const Login = () => {


     const {register, handleSubmit, reset} = useForm()
    const onSubmit = async (data) => {
            try {
                const response = await axios.post('https://crudcrud.com/api/f0ef3ea7c2454e6d80f7317ab09743bc/users', data)
                console.log(response.data)
                reset()
            } catch {
                console.error(error);
            }
    } 

    return (
    <section className="flex min-h-full items-center w-screen h-screen bg-slate-200 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className='bg-white rounded px-7 md:w-[50vw] w-[70vw]'>
            <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign Up
            </h2>
            <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)} className="space-y-6 my-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div>
                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    {...register('name')}
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register('email')}
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    {...register('password')}
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Create account
                </button>
              </div>
              <hr />
              <div className='text-center flex gap-1 justify-center'>
                <p className='text-gray-900 text-sm'>Have an account?</p>
                 <a href="./login" className="text-sm text-blue-500">Login</a>
              </div>
            </form>
        </div>   
  
    </section>
    )
  }

  export default Login