import './sass/style.css'
import Navbar from './components/Navbar';
import Content from './components/Content';
import AddEntry from './components/AddEntry';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <AddEntry />
      <Modal />
    </div>
  );
}

export default App;
