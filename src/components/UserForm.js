import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from './FormContainer';

const UserForm = props => {
  const [enteredNickName, setEnteredNickName] = useState('');
  const [enteredYear, setEnteredYear] = useState('');

  const addNickHandler = event => {
    event.preventDefault();

    if (
      enteredNickName.trim().length === 0 ||
      enteredYear.trim().length === 0
    ) {
      return;
    }

    if (+enteredYear < 1920) {
      return;
    }

    props.onAddNick(enteredNickName, enteredYear);
  };

  const NickNameHandler = event => {
    setEnteredNickName(event.target.value);
  };

  const YearHandler = event => {
    setEnteredYear(event.target.value);
  };

  return (
    <FormContainer>
      <Form className='mt-3'>
        <Form.Group>
          <Form.Label>Nick name</Form.Label>
          <Form.Control
            type='text'
            placeholder='mike-t'
            onChange={NickNameHandler}
            value={enteredNickName}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Year of nickname</Form.Label>
          <Form.Control
            type='text'
            placeholder='1990'
            onChange={YearHandler}
            value={enteredYear}
          />
        </Form.Group>
        <Button onClick={addNickHandler}>Add Nick</Button>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
