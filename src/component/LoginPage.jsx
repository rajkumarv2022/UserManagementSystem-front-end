import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-96 max-h-[600px] gap-10 border-2 border-gray-400 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold mb-4 text-center">Login Page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-80 w-full gap-12">
          {error && <div className="text-red-500 text-sm">{error}</div>}

 
          <div className='flex flex-col w-full gap-8'>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-3 outline-none border-2 border-gray-700"
              />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-3 outline-none border-2 border-gray-700"
              /> 

              <div className='flex flex-row gap-4'>
                <input type="checkbox" checked={isSeller} onChange={(e) => setIsSeller(e.target.checked)} className="form-checkbox h-5 w-5 text-blue-500 border-2 border-gray-700"/>
                <label className="ml-2">Seller Account</label>
              </div>

              
          </div>
          
          <div className="flex flex-col w-full h-full items-between gap-8">

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Login'}
            </button>

            <button
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-md"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Google'}
            </button>

            <div className='flex flex-row gap-2'>
              <p className='ml-3'>If you don't have an account click</p>
              <Link to='/Signup' className='text-blue-400'>SignUp</Link>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}