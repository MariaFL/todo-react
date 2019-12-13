import React from 'react';
import './index.css';
import TodoItem from './TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updateTodos
      };
    })
  };
  render() {
    const todosList = todosData.map(todo => {
      return (
        <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange}/>
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
