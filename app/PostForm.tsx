"use client"; // define a client compoment

import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import Dream from './Dream';
import Duration from './duration';

const PostForm = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [posts, setPosts] = useState<{id: string, postText: string, duration: number}[]>([]);
  const [duration, setDuration] = useState<number>(5000);

  const handleSubmit = (value: React.FormEvent<HTMLFormElement>) => {
    value.preventDefault();
    if (inputValue.trim() === '') return;

    // create a new post object
    const newPost = {
      id: uuidv4(), // unique ID based on uuidv4
      postText: inputValue,
      duration: duration, // time duration in ms
    };
    
    // set the new post in the posts data set
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setInputValue('');
  };

  const removePost = (id: string) => {
    alert(`clearing: ${id}`);
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const onDurationChange = (newDuration: number) => {
    setDuration(newDuration);
  }

  return (
  <div className='submitForm'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="form a dream..."
      />
      <Duration onDurationChange={onDurationChange} /> {/* duration comp*/}
      <button type="submit">dream</button>
    </form>

    <div className='posts'>
      {posts.map((post) => (
        <Dream
          key={post.id} // necessary for rendering lists
          id={post.id}
          postText={post.postText}
          duration={post.duration}
          removePost={removePost}
        />
      ))}
    </div>
  </div>
  );
};

export default PostForm;
