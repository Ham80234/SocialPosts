import './style.css'
import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import Post from '../models/Post';

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

interface Prop {
  addPost: (x:Post) => void
}

const NewThoughtBtn = ({addPost}: Prop) => {
  let subtitle:any;
  const [title, setTitle] = useState("")
  const [thought, setThought] = useState("")

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

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    let NewPost: Post = {
      title: title,
      thought: thought
    }
    setTitle("")
    setThought("")
    addPost(NewPost)
    closeModal()
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="Title"> Title</label>
          <input
          className='title'
           type="text"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="thought"> Thought</label>
          <input
          className='textarea'
           type="text"
           value={thought}
           onChange={(e) => setThought(e.target.value)}
          />
          <button type="submit">Add Post</button>
        </form>
        
      </Modal>
    </div>
    
  )
};

export default NewThoughtBtn;
