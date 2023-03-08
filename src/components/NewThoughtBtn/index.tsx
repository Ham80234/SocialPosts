import './style.css'
import { useState } from 'react';
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const NewThoughtBtn = () => {
  let subtitle:any;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='container'>
      <button className="Btn" onClick={openModal}>
      New Thought
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-ctn">
          <h3>Title:</h3>
          <input type="text" />
          <h3>Thought</h3>
          <textarea name="" id=""></textarea>
          <button>Add Post</button>
        </div>
      </Modal>
    </div>
    
  )
};

export default NewThoughtBtn;
