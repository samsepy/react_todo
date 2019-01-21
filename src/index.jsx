import React from 'react';
import {render} from 'react-dom';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos
    return (
      <div>
        {todos.map(todo => (
          <div key={todo.id}>{todo.desc}</div>
        ))}
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <input name="desc" type="text" placeholder="タイトル ※必須" defaultValue="reactの勉強" /><br/>
          <button type="submit">追加</button>
        </form>
      </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    const todos = [
      {
        id: 1,
        desc: "todo1"
      },
      {
        id: 2,
        desc: "todo2"
      },
      {
        id: 3,
        desc: "todo3"
      }
    ]
    this.state = {
      todos: todos
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();
    todos.push({
      id: 3,
      desc: desc
    });
    this.setState({todos});
  }
  render () {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
