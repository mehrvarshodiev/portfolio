import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className='preloader'>
      <ThreeCircles
        height='120'
        width='120'
        color='red'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='three-circles-rotating'
        outerCircleColor='#287e82'
        innerCircleColor='#83d6dc'
        middleCircleColor='#ffffff'
      />
    </div>
  );
};

export default Preloader;
