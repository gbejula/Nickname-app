import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [nickList, setNickList] = useState([]);

  const addNickHandler = (uName, uYear) => {
    setNickList(prevList => {
      return [
        ...prevList,
        { name: uName, year: uYear, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <Header />
      <Container>
        <UserForm onAddNick={addNickHandler} />
        <UserList users={nickList} />
      </Container>
    </>
  );
};

export default App;
