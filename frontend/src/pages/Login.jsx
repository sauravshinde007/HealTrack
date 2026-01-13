import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // New states for mandatory profile information
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('Male')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Sign Up') {
        // Sending extra information (dob and gender) to avoid empty values in appointments
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password, dob, gender })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }

      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center px-4 mt-20 pt-5'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-indigo-50 rounded-[2.5rem] bg-white/70 backdrop-blur-md text-[#5E5E5E] text-sm shadow-2xl'>
        
        <div className='w-full mb-2'>
          <p className='text-3xl font-bold text-dark leading-tight'>
            {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
          </p>
          <p className='text-gray-500 mt-1'>
            Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book your next appointment
          </p>
        </div>

        {state === 'Sign Up' && (
          <>
            <div className='w-full'>
              <p className='font-medium ml-1'>Full Name</p>
              <input 
                onChange={(e) => setName(e.target.value)} 
                value={name} 
                className='border border-indigo-100 rounded-2xl w-full p-3 mt-1 outline-primary bg-white/50 focus:bg-white transition-all' 
                type="text" 
                placeholder="Enter your full name"
                required 
              />
            </div>

            <div className='flex gap-4 w-full'>
              <div className='flex-1'>
                <p className='font-medium ml-1'>Date of Birth</p>
                <input 
                  onChange={(e) => setDob(e.target.value)} 
                  value={dob} 
                  className='border border-indigo-100 rounded-2xl w-full p-3 mt-1 outline-primary bg-white/50 focus:bg-white transition-all' 
                  type="date" 
                  required 
                />
              </div>
              <div className='flex-1'>
                <p className='font-medium ml-1'>Gender</p>
                <select 
                  onChange={(e) => setGender(e.target.value)} 
                  value={gender} 
                  className='border border-indigo-100 rounded-2xl w-full p-3 mt-1 outline-primary bg-white/50 focus:bg-white transition-all'
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </>
        )}

        <div className='w-full'>
          <p className='font-medium ml-1'>Email</p>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            className='border border-indigo-100 rounded-2xl w-full p-3 mt-1 outline-primary bg-white/50 focus:bg-white transition-all' 
            type="email" 
            placeholder="example@mail.com"
            required 
          />
        </div>

        <div className='w-full'>
          <p className='font-medium ml-1'>Password</p>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            className='border border-indigo-100 rounded-2xl w-full p-3 mt-1 outline-primary bg-white/50 focus:bg-white transition-all' 
            type="password" 
            placeholder="Min. 8 characters"
            required 
          />
        </div>

        <button className='bg-gradient-brand text-white w-full py-4 mt-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200/50 hover:scale-[1.02] active:scale-95 transition-all duration-300'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className='w-full text-center mt-2'>
          {state === 'Sign Up'
            ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary font-bold underline cursor-pointer hover:text-secondary transition-colors'>Login here</span></p>
            : <p>New to HealTrack? <span onClick={() => setState('Sign Up')} className='text-primary font-bold underline cursor-pointer hover:text-secondary transition-colors'>Create an account</span></p>
          }
        </div>
      </div>
    </form>
  )
}

export default Login