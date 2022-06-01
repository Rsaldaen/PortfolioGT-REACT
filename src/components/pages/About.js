import React from 'react';
import './style.css';
import forest from '../../images/forest.jpg'

export default function About() {
  return (
    <div className='center'>
      <h1 >About Me</h1>
      <p className='container abouttext'>
      I am a junior developer constantly developing my skills I learned in school and skills I learned on my own. On my journey to master these skills I want make products that people can use. I want to make apps that people find useful. I want to make some that are even just for fun.  I want to do as much as I can and see where that journey takes me.
      </p>
      <img src={forest} alt='forest' className='homepic'></img>
    </div>
  );
}
