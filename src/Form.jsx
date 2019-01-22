import React from 'react';

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

export default Form;