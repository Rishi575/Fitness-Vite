import React, { useEffect, useState } from 'react';
import '@/assets/css/Loading.css'; 
const Loading = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      updateWindowSize();
    };

    const handleMouseMove = (e) => {
      const mouseElement = document.querySelector('.mouse');
      if (mouseElement) {
        mouseElement.style.left = `${e.pageX - 16}px`;
        mouseElement.style.top = `${e.pageY - 16}px`;
      }
    };

    const handleClick = (e) => {
      const newMouseElement = document.createElement('div');
      newMouseElement.className = 'mouse';
      newMouseElement.style.left = `${e.pageX - 16}px`;
      newMouseElement.style.top = `${e.pageY - 16}px`;
      document.body.appendChild(newMouseElement);
      setTimeout(() => {
        newMouseElement.remove();
      }, 10000); 
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const loaderStyle = {
    height: windowSize.height,
    width: windowSize.width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Adjust background color
    zIndex: 9999, // Make sure it's on top of other content
  };

  const imageStyle = {
    paddingTop: (windowSize.height - 60) / 2, // Adjust the size if necessary
    paddingLeft: (windowSize.width - 60) / 2, // Adjust the size if necessary
  };

  return (
    <div className="loading" style={loaderStyle}>
      <img
        src="http://a.top4top.net/p_1990j031.gif"
        alt="Loading"
        style={imageStyle}
      />
      <div className="mouse original" />
    </div>
  );
};

export default Loading;
