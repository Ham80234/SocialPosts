import { useState } from 'react';
import './SocialPost.css'
import Post from '../models/Post';
import PostInList from '../PostInList';


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

  return (
    <div className='SocialPost'>
        <ul>
          {posts.map(item => {
            return (
              <div>
                <PostInList post={item} />
                <hr />
              </div>
            )
          })}
        </ul>
    </div>
  )
};

export default SocialPost;
