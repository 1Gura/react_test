import React , {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)
  return {
    bind: {
      value: value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({addTodo}) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()
    if(input.value().trim()) {
      addTodo(input.value())
      input.clear()
    }
  }

  return (
    <form className = 'form' onSubmit = {submitHandler}>
      <input {...input.bind}/>
      <button type = 'submit'>Add Todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo