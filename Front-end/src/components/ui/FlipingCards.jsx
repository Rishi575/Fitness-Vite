import React, { useState } from 'react';
import '@/assets/css/Fliping.css'

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
    <div className='flex justify-center items-center font-serif font-bold text-3xl mt-20'>
        Choose Your Method
    </div>
    <div className='flex flex-row justify-evenly items-center mt-10 mb-10'>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">
            <img src='https://ik.imagekit.io/wgp1xe3yu/Home/file.jpg?updatedAt=1723094186865' className='scale-80 h-full' />
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
        <img src='https://ik.imagekit.io/wgp1xe3yu/Home/eren.jpg?updatedAt=1723093071221' className='scale-80 ' />
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
        <img src='https://ik.imagekit.io/wgp1xe3yu/Home/zorojpg.jpg?updatedAt=1723092924678' className='scale-80' />
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
    </>
  );
};

export default FlippingCard