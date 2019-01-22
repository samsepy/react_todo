import React from 'react';
import {render} from 'react-dom';

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
        desc: "todo1",
        done: true
      },
      {
        id: 2,
        desc: "todo2",
        done: true
      },
      {
        id: 3,
        desc: "todo3",
        done: true
      }
    ]
    this.state = {
      todos: todos,
      countTodo: todos.length + 1,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;
    todos.push({
      id: countTodo,
      desc: desc,
      done: true
    });
    this.setState({todos});
    this.setState({countTodo: countTodo + 1})
  }

  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todos[clickTodo.id - 1] = todo;
    this.setState({ todos });
  }

  render () {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
        />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
