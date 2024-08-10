import React from 'react';
import { Ani } from '@/assets/images/loader.webm';

const Loader = () => (
    <div className="loader">
    <video autoPlay loop muted>
      <source src={Ani} type="video/webm" />
    </video>
  </div>
);

export default Loader;
