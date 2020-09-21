import React, {useEffect} from 'react';
import {useState} from 'react'

import TodoList from './components/TodoList'
import Context from './context'
import Loader from './components/Loader'
import './styles/styles.scss'
import Modal from './Model/Modal';

const AddTodo = React.lazy(() => import('./components/AddTodo'))

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
          setTodos(todos)
          setLoading(false)
        })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    ) 
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([{
        title: title,
        id: Date.now(),
        completed:false
      }])
    )
  }

  return (
  <Context.Provider value = {{removeTodo}}>
    <div className="container">
      <h1>List</h1>
      <Modal></Modal>
      <React.Suspense fallback = {<p>Loading...</p>}>
        <AddTodo addTodo = {addTodo}></AddTodo>
      </React.Suspense>
      
      {loading && <Loader/>}
      {todos.length ? <TodoList todos = {todos} toggleTodo = {toggleTodo}/>
      : loading ? null :  <p>No todos!</p>}
      
    </div>
  </Context.Provider>
  )
}

export default App;
