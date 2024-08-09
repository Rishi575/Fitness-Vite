import React, { useEffect } from 'react';
import Swiper from 'swiper';
import '@/assets/css/swiper.css'; // Import Swiper styles
// import '@/assets/css/swiper.css';

const Swip = () => {
 
  return (
    <div className='section'>
      <div className='content'>
        <div className='info'>
          <p>
            Welcome to FitNation Gym 
            <span className='movie-night'> _GYM_DEADPOOL_ </span> 
            Transform Your Body, Transform Your Life
            At FitNation Gym, we believe in helping you achieve your fitness goals and unlock your potential. Whether you're just starting out or a seasoned athlete, our state-of-the-art facilities and expert trainers are here to guide you every step of the way.
          </p>
          <button className='btn'>Join</button>
        </div>
        <div className='swiper'>
          <div className=''>
            <div className=''>
              <img
                src='https://ik.imagekit.io/wgp1xe3yu/Home/deadpool.jpg?updatedAt=1723195291311'
                alt=''
                className='scale-90 -mt-12 rounded-2xl'
              />
            </div>
          </div>
        </div>
      </div>

      <ul className='circles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Swip;
