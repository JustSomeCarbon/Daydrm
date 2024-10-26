"use client"; // client component

import {useEffect} from 'react';

interface PostProps {
  id: string;
  postText: string;
  duration: number;
  removePost: (id: string) => void; // function to remove the post
}

// Individual dream components with their own separate timer that is passed in.
// The dream is deleted and cleaned up after the duration for the post has expired.
// React.FC<PostProps> allows us to define the structure for the props that are going to
// be passed into the Dream creation function.
const Dream: React.FC<PostProps> = ({ id, postText, duration, removePost }) =>  {
  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
    removePost(id);
    }, duration);

    // define the cleanup for the timeout function
    return () => {
      clearTimeout(timer);
    };
  }, [id, duration, removePost]);

  return (
    <div style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px'}}>
      {postText}
    </div>
  );
}

export default Dream;
