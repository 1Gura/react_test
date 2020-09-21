import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul className="list">
      {props.todos.map((todo, index) => {
        return (
          <TodoItem 
           todo = {todo}
           key = {index} 
           index = {index+1}
           toggleTodo = {props.toggleTodo}/>
        )
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;
