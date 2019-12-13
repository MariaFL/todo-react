import React from 'react';

function TodoItem(props) {
  return (
    <div className="taskItem">
      <input
        type="checkbox"
        className="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p className="checktext">{props.todo.text}</p>
    </div>
  )
}

export default TodoItem;