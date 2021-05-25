import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // eslint-disable-next-line no-alert
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="add-item" onSubmit={this.handleSubmit}>
        <input name="todo" type="text" value={this.state.value} placeholder="Todo Item" onChange={this.handleChange} />
        <input type="submit" value="Add Todo Item" />
      </form>
    );
  }
}

export default Form;
