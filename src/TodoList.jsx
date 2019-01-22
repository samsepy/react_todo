import React from 'react';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos
    return (
      <ul>
        {todos.map(todo => (
          todo.done &&
            <li key={todo.id}>
              {todo.desc}
              <a href="" onClick={(e) => {e.preventDefault(); this.props.setTodoStatus(todo)}}>完了</a>
            </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;