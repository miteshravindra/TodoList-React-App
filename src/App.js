import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    todos: [{ id: 1, todo: "Walk the dog" }, { id: 2, todo: "Fuck Bianca" }]
  };

  deleteTodos(id){
    let newTodos = this.state.todos.filter(todo=> todo.id!==id);
    this.setState({
      todos: newTodos
    })

  }

  addTodos(todo){
    todo.id= Math.random();
    let newTodos = [...this.state.todos,todo];
    this.setState({
      todos: newTodos
    })

  }

  render() {
    return (
      <div className="Main-App container">
        <h1 className="center blue-text">Todo List</h1>
        <TodoList todos={this.state.todos} deleteTodos={this.deleteTodos.bind(this)}/>
        <AddTodo addTodos={this.addTodos.bind(this)}/>
      </div>
    )
  }

}

export default App;
