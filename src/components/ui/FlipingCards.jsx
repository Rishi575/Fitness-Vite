import React, { useState } from 'react';
import '@/assets/css/Fliping.css'

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='flex flex-row justify-evenly items-center mt-20'>
      <div className={`card ${isFlipped ? 'flipped' : ''}` } onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">

          </div>
          <div className="card-back">
            <button className='buy-button absolute bottom-5'>Learn More</button>
          </div>
        </div>
      </div>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">

          </div>
          <div className="card-back">
            <button className='buy-button absolute bottom-5'>Learn More</button>
          </div>
        </div>
      </div>

      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">

          </div>
          <div className="card-back">
            <button className='buy-button absolute bottom-5'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard