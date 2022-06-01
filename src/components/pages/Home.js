import React from 'react';
import Photo1 from '../../images/seattle.JPG';
import './style.css';

export default function Home() {
  return (
    <div className = 'center bodystuff'>
      <h1>Home Page</h1>
      <img className = "homepic" alt="seattle pic" src={Photo1}></img>
      <p className = 'hometext'>
      Welcome, I Am Developing.
      </p>
    </div>
  );
}
