import React from 'react';

function VideoSection() {
  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-b from-indigo-500 ...">
      <div className="shadow-2xl">
        <video 
          width="640" 
          height="360" 
          controls
          className="rounded-lg"
        >
          <source src="YOUR_VIDEO_URL_HERE.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;
