import React from 'react'
import TodoTable from "./containers/TodoTable"
import TodoForm from "./containers/TodoForm"

function ModuleTodo() {
  return (
    <div>
        <h1 className='text-2xl text-center'>Mis tareas</h1>
        <TodoForm/>
        <TodoTable/>
    </div>
  )
}

export default ModuleTodo