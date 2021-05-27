import { Container } from 'react-bootstrap';
import Header from './components/Header';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <UserForm />
      </Container>
    </>
  );
};

export default App;
