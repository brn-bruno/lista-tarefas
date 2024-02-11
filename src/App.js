import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Tasklist from './components/Taskslist';
import Title from './components/Title';
import Modal from './components/Modal';

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
