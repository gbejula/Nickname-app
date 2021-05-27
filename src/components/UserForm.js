import React from 'react';
import { Form } from 'react-bootstrap';
import FormContainer from './FormContainer';

const UserForm = () => {
  return (
    <FormContainer>
      <Form className='mt-3'>
        <Form.Group>
          <Form.Label>Nick name</Form.Label>
          <Form.Control type='text' placeholder='mike-t' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Year of nickname</Form.Label>
          <Form.Control type='text' placeholder='1990' />
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
