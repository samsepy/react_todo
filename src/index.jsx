import React from 'react';
import {render} from 'react-dom';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos
    return (
      <div>
        {todos.map(todo => (
          <div key={todo.id}>{todo.content}</div>
        ))}
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          content: "todo1"
        },
        {
          id: 2,
          content: "todo2"
        },
        {
          id: 3,
          content: "todo3"
        },
      ]
    }

  }
  render () {
    return (
      <TodoList todos={this.state.todos}/>
    );
  }
}

render(<App/>, document.getElementById('app'));
