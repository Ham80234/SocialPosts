import { useState } from 'react';
import './SocialPost.css'
import Post from '../models/Post';
import PostInList from '../PostInList';
import NewThoughtBtn from '../NewThoughtBtn';


const SocialPost = () => {
    const [posts, setPosts] = useState<Post[]>([
      {
        title: 'Where is the moon',
        thought: 'I am not entirly sure '
      },
      {
        title: 'hi',
        thought: 'i swam today'
      },
      {
        title: 'hi',
        thought: 'i swam today'
      },

  ])

  const addPost = (Newthought: Post) => {
    setPosts(prev => [...prev, Newthought])
  }

  const deletePost = (index: number) => {
    setPosts(prev => [...prev.slice(0, index), ...prev.slice(index + 1)])
  }

  return (
    <div className='cont'>
      <NewThoughtBtn addPost={addPost}/>
          <div className='SocialPost'>

              <ul>
                {posts.map((item, idx) => {
                  return (
                    <div>
                      <PostInList post={item}  deletePost={() => deletePost(idx)}/>
                      <hr />
                    </div>
                  )
                })}
              </ul>
          </div>
    </div>
  )
};

export default SocialPost;
