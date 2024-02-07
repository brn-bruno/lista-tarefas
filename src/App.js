import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Tasklist from './Components/Taskslist';
import Title from './Components/Title';
import Modal from './Components/Modal';

function App() {
  return (
    <>
    <div className="App">
      <Navbar></Navbar>
      <Title></Title>
      <Tasklist></Tasklist>
      
    </div>

    <footer>Por Bruno de Paula Teixeira</footer>
    </>
  );
}

export default App;
