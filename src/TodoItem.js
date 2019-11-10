import React from 'react';

function TodoItem(props) {
  return (
    <div className="taskItem">
      <input type="checkbox" className="checkbox" checked={props.todo.completed}/>
      <p className="checktext">{props.todo.text}</p>
    </div>
  )
}

export default TodoItem;