import { useState, useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Navbar from './components/Navbar';



function App() {


  const [Todos, setTodos] = useState([])
  const [Todo, setTodo] = useState("")


  // Function
  const saveTLS = () => {
    localStorage.setItem("My-Todos", JSON.stringify(Todos))
  }


  const handleAdd = () => {
    setTodos([...Todos, { Todo, isCompleted: false, id: Date.now() }]);
    setTodo('')
    // console.log(Todos);
    saveTLS()
  }

  const handleEdit = (e, todo) => {
    let t = Todos.filter(item => {
      return item.Todo === todo;
    })
    setTodo(t[0].Todo)
    let newTodos = Todos.filter(item => {
      return item.Todo !== todo;
    })
    setTodos(newTodos)
    saveTLS()
  }
  const handleDelete = (e, todo) => {
    const isConfirmed = confirm('Are you sure you want to delete this todo?');
    if (isConfirmed) {
      let newTodos = Todos.filter(item => {
        return item.Todo !== todo;
      })
      setTodos(newTodos)
      // console.log(Todos);
    }
    saveTLS()

  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = Todos.findIndex(item => {
      return item.Todo === id
    })
    // console.log(index);
    let newTodos = [...Todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    // console.log(Todos);
    saveTLS()

  }
  useEffect(() => {
    let s = localStorage.getItem("My-Todos")
    if (s) {
      let todosL = JSON.parse(localStorage.getItem("My-Todos"))
      setTodos(todosL)
    }
  }, [])


  return (
    <>
      <div className="main bg-[#212529] min-h-screen text-white md:w-full">
        <Navbar />

        {/* add todo */}
        <div className="input w-full flex flex-col gap-2">
          <h1 className='text-2xl font-bold place-self-center mt-3 text-[#dee2e6] '>What will you do Today?</h1>
          <div className="flex justify-center items-center gap-3">
            <input value={Todo} onChange={handleChange} type="text" className='p-5 outline-none place-self-center border border-[#dee2e6]  sm:w-[490px] h-10 bg-transparent rounded-full' />
            <button onClick={handleAdd} className='bg-[#e5383b] py-2 px-8 rounded-full hover:scale-102 cursor-pointer'>Add</button>
          </div>
        </div>
        {/* My todos */}
        <div className="Todos p-4 place-self-center flex flex-col flex-wrap h-[73vh] sm:min-h-[400px] mt-3 rounded-xl w-[90vw] sm:w-[600px] bg-[#343a40] gap-4">
          {Todos.length === 0 && <div className='text-gray-400'>No Todos yet</div>}
          {Todos.map(item => {
            return <div key={item.id} className="todo flex justify-between">
              <div className="flex gap-2 items-center justify-center">
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.Todo} />
                <p className={item.isCompleted ? "line-through" : ""}>{item.Todo}</p>
              </div>
              <div className='flex gap-2.5 items-center justify-center'>
                <button onClick={(e) => { handleEdit(e, item.Todo) }} className='bg-[#6c757d] w-[30px] h-[30px] flex items-center justify-center rounded-full hover:scale-102 cursor-pointer'><FaRegEdit />
                </button>
                <button onClick={(e) => { handleDelete(e, item.Todo) }} className='bg-[#6c757d] w-[30px] h-[30px] flex items-center justify-center   rounded-full hover:scale-102 cursor-pointer'><MdDelete />
                </button>
              </div>

            </div>

          })}

        </div>
      </div>
    </>
  )
}

export default App
