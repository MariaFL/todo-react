import React from 'react';
import './index.css';
import TodoItem from './TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
  };
  render() {
    const todosList = todosData.map(todo => {
      return (
        <TodoItem key={todo.id} todo={todo}/>
      );
    });
    return (
      <div className="tasklist">
        {todosList}
      </div>
    );
  };
}

export default App;
