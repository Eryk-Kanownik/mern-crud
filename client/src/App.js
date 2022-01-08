import './sass/style.css'
import Navbar from './components/Navbar';
import Content from './components/Content';
import AddEntry from './components/AddEntry';
import Modal from './components/Modal';

import {useState} from 'react'

function App() {
  const [modal,setModal] = useState(false)

  let onClick = () => {
        setModal(!modal)
        console.log(modal)
  }

  return (
    <div>
      <Navbar />
      <Content />
      <AddEntry openModal={onClick} modal={modal}/>
      <Modal show={modal} setShow={setModal}/>
    </div>
  );
}

export default App;
