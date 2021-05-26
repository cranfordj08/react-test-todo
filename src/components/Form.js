import React from 'react';

const Form = (props) => {
  const { inputValue, handleChange, handleSubmit } = props;

  return (
    <form className="add-item" onSubmit={handleSubmit}>
      <input name="todo" type="text" value={inputValue} placeholder="Todo Item" onChange={handleChange} />
      <input type="submit" value="Add Todo Item" />
    </form>
  );
};

export default Form;
