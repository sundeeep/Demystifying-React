import React, { useState } from 'react'
import TodoListing from './TodoListing';
import TodoWriter from './TodoWriter';

function TodoApp() {
    const [todos, setTodos] = useState(["Hii"]);

    return (
        <div className='flex flex-col'>
            <TodoWriter todos={todos} setTodos={setTodos}/>
            <TodoListing todos={todos}/>
        </div>
    )
}

export default TodoApp;