import { useState } from 'react';


export default function SignupPage() {

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[pass,setPass] = useState("");

  const handleSubmit = () => {

    alert("User Registered");   

  }

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center w-full">
    <div className="flex flex-col w-full h-full max-w-96 max-h-[600px] items-center justify-center gap-4 border-2 border-gray-400 shadow-md rounded-md ">
        <h1 className="text-3xl font-semibold mb-4">Signup</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-8">
        
          <div className='flex flex-col w-full max-w-80 gap-8'>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e)=> setName(e.target.value) }
              className="w-full px-3 py-3 border-2 border-gray-700 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="w-full px-3 py-3 border-2 border-gray-700 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
              className="w-full px-3 py-3 border-2 border-gray-700 outline-none"
            />
          </div>

          <div className='flex flex-col w-full max-w-80 gap-4'>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-3 rounded-md hover:bg-blue-600"
            >
              Signup
            </button>

            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-3 rounded-md hover:bg-gray-600"
            >
              Signup with Google
            </button>

            <div className="felx flex-row w-full">  
              <p className='flex flex-row gap-2 w-full max-w-72 ml-6'> <span>Already have an account click</span> <a href="/login" className='text-blue-400'>Login</a> </p>
            </div>
          </div>         
        </form>
      </div>
    </div>
  );
}