import './style.css'
import Post from '../models/Post'


interface Prop { 
  post : Post;
  deletePost: () => void
}

const PostInList = ({post, deletePost}: Prop) => {
  return (
    <div className='PostInList'>
        <div className='content'>
          <h2>{post.title}</h2>
         <p> {post.thought}</p>
        </div>
        <div className='svg' onClick={deletePost}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/></svg>
        </div>
    </div>
  
  )
};

export default PostInList;
