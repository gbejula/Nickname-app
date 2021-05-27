import React from 'react';
import { Form } from 'react-bootstrap';

const UserList = props => {
  return (
    <Form type='text' className='mt-5'>
      <ul>
        {props.users.map(user => (
          <li key={user.id}>
            {user.name} ({user.year})
          </li>
        ))}
      </ul>
    </Form>
  );
};

export default UserList;
