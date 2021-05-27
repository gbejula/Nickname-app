import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import UserForm from './components/UserForm';

function App() {
  return (
    <>
      <Header />
      <Container>
        <UserForm />
      </Container>
    </>
  );
}

export default App;
