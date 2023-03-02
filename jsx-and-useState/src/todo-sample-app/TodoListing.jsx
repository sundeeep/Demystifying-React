import React, { useEffect, useState } from 'react'

function TodoListing({todos}) {

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-[75%] flex flex-col p-3 justify-center rounded-md'>
                {
                    todos.map((todo, index) => {
                        return(
                            <h1 key={index}>{todo}</h1>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoListing