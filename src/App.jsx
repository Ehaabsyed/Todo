import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './assets/components/navbar'
import Hero from './assets/components/Hero'

function App() {
const [Todos, setTodos] = useState([])
const [Todo, setTodo] = useState({text:String,isComplete:false})
  return (
    <>
      <div className="main bg-[#212529] min-h-screen text-white w-full">
        <Navbar />
        <div className="input w-full flex flex-col gap-2">
          <h1 className='text-2xl font-bold place-self-center mt-3 text-[#dee2e6]'>What will you do Today?</h1>
          <div className="flex justify-center items-center gap-3">
            <input type="text" placeholder='Note here... ' className='p-5 outline-none place-self-center border border-[#dee2e6]  w-[490px] h-10 bg-transparent rounded-full' />
            <button className='bg-[#e5383b] py-2 px-8 rounded-full hover:scale-102 cursor-pointer'>Add</button>
          </div>
        </div>
        <Hero/>

      </div>
    </>
  )
}

export default App
