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

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input name="content" type="text"/><br />
          <button type="submit">追加</button>
        </form>
      </div>
    )
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
      <div>
        <TodoList todos={this.state.todos}/>
        <Form />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
