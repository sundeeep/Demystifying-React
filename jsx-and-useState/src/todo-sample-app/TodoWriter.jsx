import React, { useState } from 'react'

function TodoWriter({todos, setTodos}) {

    const [todo, setTodo] = useState("");
    
    const addTodo = (event) => {
        event.preventDefault();  //TODO: To avoid the refresh / reloading of the page
        if(todo === ""){
            return alert("Enter Todo")
        }

        console.log(todos);
        setTodos([...todos, todo])
        setTodo("");
    }

    const clearTodos = (event) => {
        event.preventDefault();
        // setTodos("");
    }
    
    return (
        <form onSubmit={addTodo} className='flex items-center justify-center bg-slate-400 py-10'>
            <input 
                className='bg-red-500/50 font-bold text-black rounded-tl-md rounded-bl-md px-2 py-3 w-[70%] outline-none border border-transparent focus:border focus:border-black'
                placeholder='Write your Todo! :D'
                type="text" 
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                />
            
            <button type='submit' className='border border-l-red-500 px-2 py-3 font-bold bg-black  text-white'>Add Todo</button>


            <button onClick={clearTodos} className='px-2 py-3 font-bold bg-black rounded-tr-md rounded-br-md text-white'>Clear Todos</button>
        </form>
    )
}

export default TodoWriter