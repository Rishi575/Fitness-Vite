import React, { useState } from 'react';
import '@/assets/css/Fliping.css'

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='flex flex-row justify-evenly items-center mt-20'>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front ">
            <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/Unisex-Personal-Trainer-1-1.svg' className='scale-80' />
          </div>
          <div className="card-back">
            <div className=''>
              <h1 className='font-bold font-serif text-lg text-black'>Fitness Trainer</h1>
              <p className='font-bold font-serif text-sm text-black'>There are well knowledged trainer in our Gym</p>
            </div>
            <button className='buy-button absolute bottom-5'>Learn More</button>
          </div>
        </div>
      </div>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
        <div className="card-front">
        <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/diet-1.svg' className='scale-80' />
          </div>
          <div className="card-back">
            <div className=''>
              <h1 className='font-bold font-serif text-lg text-black'>Sports Nutrition</h1>
              <p className='font-bold font-serif text-sm text-black'>There are followed Diet plan to Client in our Gym</p>
            </div>
            <button className='buy-button absolute bottom-5'>Learn More</button>
          </div>
        </div>
      </div>

      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
        <div className="card-front">
        <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/Weight-Training.png' className='scale-80 ' />
          </div>
          <div className="card-back">
            <div className='text-background'>
              <h1 className='font-bold font-serif text-lg text-black'>Imported Machineries</h1>
              <p className='font-bold font-serif text-sm text-black'>There are Imported Machineries for clients in our Gym</p>
            </div>
            <button className='buy-button absolute bottom-5'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard