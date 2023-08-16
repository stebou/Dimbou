import React from 'react';

function VideoSection() {
  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-b from-indigo-500 ...">
      <div className="shadow-2xl">
        <video 
          width="960"  // Increased width
          height="540"  // Increased height
          loop  // Video will loop
          muted  // Video will be muted
          autoPlay  // Video will autoplay (corrected attribute)
          className="rounded-lg"
        >
          <source src="/sectionvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;
