import React from 'react';
import './index.css';
import TodoItem from './TodoItem';

function App() {
  return (
    <div className="tasklist">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  );
}

export default App;
