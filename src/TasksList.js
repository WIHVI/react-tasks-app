import React from 'react';

export default class NewTask extends React.Component {
  render() {
    return (
      <ul>
        {this.props.allTasks.map(({ title, description, id }) => (
          <li key={id}>
            <div>
              <h2>{title}</h2>
              <button onClick={() => this.props.handleDelete(id)}>X</button>
            </div>
            {!description ? null : <p>{description}</p>}
          </li>
        ))}
      </ul>
    );
  }
}
