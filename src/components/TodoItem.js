import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import Context from '../context'

function TodoItem({todo, index, toggleTodo}) {
 const {removeTodo} = useContext(Context)
 const classes = []
 if (todo.completed) {
  classes.push('done')
 }
 const clas = 'element-task' + ' ' + classes;
  return (
    <li className = "item"> 
    <span className = {clas}> 
        <input
        checked = {todo.completed}
        type = "checkbox"
        onChange = {() => {toggleTodo(todo.id)}}/>
        <span>{index}</span> <span>{todo.title}</span>
    </span>
        <button className = "btn-delete"
          onClick = {()=>removeTodo(todo.id)}>
          &times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoItem;
