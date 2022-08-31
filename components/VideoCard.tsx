import React from 'react';
import { Video } from '../types';

interface Iprops { 
  post: Video; 
}

const VideoCard = ({ post }: Iprops) => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard