import React from 'react';
import Container from 'components/Container';
import Form from 'components/Form';
import { H1 } from 'components/H';

const Index = ({ handleChange, inputValue }) => {

  const handleSubmit = (event) => {
    // eslint-disable-next-line no-alert
    alert(inputValue);
    event.preventDefault();
  };

  return (
    <main>
      <Container>
        <H1>To Do List</H1>
        <Form handleChange={handleChange} inputValue={inputValue} onSubmit={handleSubmit} />
      </Container>
    </main>
  );
};

export default Index;
