import React from 'react';

export default class NewTask extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          name="title"
          placeholder="New task"
          value={this.props.newTask.title || ''}
          onChange={this.props.handleChange}
        />
        {!this.props.newTask.title ? null : (
          <>
            <textarea
              name="description"
              placeholder="Details..."
              value={this.props.newTask.description || ''}
              onChange={this.props.handleChange}
            />
            <button type="submit">Add Task</button>
          </>
        )}
      </form>
    );
  }
}
