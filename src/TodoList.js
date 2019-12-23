import React from 'react';


const TodoList = (props) => {
    let todoList = props.todos.length ? (
        props.todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id} onClick={()=>{props.deleteTodos(todo.id)}} >{todo.todo}</div>
            )
        })
    ) : (<p className="center collection-item">Hurray! no todos left</p>);

    return (
        <div className="todos collection"> {todoList}</div>
    );

}

export default TodoList;