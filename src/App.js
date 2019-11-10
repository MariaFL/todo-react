import React from 'react';
import './index.css';
import TodoItem from './TodoItem';
import todosData from './todosData';

function App() {
  const todosList = todosData.map(todo => {
    return (
      <TodoItem key={todo.id} todo={todo}/>
    );
  })
  return (
    <div className="tasklist">
      {todosList}
    </div>
  );
}

export default App;
