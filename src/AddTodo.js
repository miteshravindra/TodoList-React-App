import React, { Component } from 'react';


class AddTodo extends Component {
    state ={
        todo:''
    }

    handleChange(e){
        this.setState({
            todo: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addTodos(this.state);
        this.setState({
            todo:''
        });
    }
 
  render() {
    return (
      <form className="Add-Todo" onSubmit={this.handleSubmit.bind(this)}>
          <label>Add Todo's here</label>
          <input type="text" onChange={this.handleChange.bind(this)} value={this.state.todo}/>
      </form>
    )
  }

}

export default AddTodo;
