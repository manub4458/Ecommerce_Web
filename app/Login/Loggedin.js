import React from 'react'

const Loggedin = () => {
  return (
    <>

      <div className='h-[85vh]'>
        <div className='card4 border border-blue-300 max-w-[25vw] ml-[15vw] space-y-4  h-[60vh] rounded-md'>

          <div className='flex justify-center mt-6'>
            <h2 className='font-semibold text-2xl lora'>
              Login
            </h2>
          </div>

          <div className='flex justify-center'>
            <input 
            type='email'
            placeholder='Type your email'
            className='border border-blue-300 rounded-md text-center focus:border-red-400 focus:border p-2'
            
            
            />
            
          </div>
          <div className='flex justify-center'>
            <input 
            type='password'
            id='password'
            placeholder='Enter your password'
            className='border border-blue-300 rounded-md text-center focus:border-red-400 focus:border p-2'
            
            
            />
            
          </div>
          <div className='flex justify-center gap-2'>
            <input 
            type='checkbox'
           
            className='border border-blue-500 rounded-full text-center'
            
            
            />

            <label
            className='text-sm'
            >
              Remember your password
            </label>
            
          </div>

          <div className='flex justify-center'>
            <p className='text-blue-950 underline hover:cursor-pointer'> 
              Forgot password
            </p>
          </div>
          <div className='flex justify-center'>
            <button className='poppins bg-blue-950 text-white px-24 py-2 rounded-lg'>
              Login
            </button>
          </div>
          <div className='flex justify-center gap-2'>
            <p className='text-sm'>
              No acccount yet?
            </p>

            <p className='text-blue-950 text-sm underline'>
              Register
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loggedin