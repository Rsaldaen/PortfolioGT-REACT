import React from "react";
import './style.css';

export default function Contact() {
  return (
    <div className="center">
      <h1 className="name">Contact Me</h1>
      <form className="name">
        <label for="name" tabIndex={1}>Name:</label>
        <br></br>
        <input type="text" placeholder="Your name" tabIndex={2}></input>
        <br></br><br></br>
        <label for="email">Email:</label> 
        <br></br>
        <input name="email" placeholder="example@email.com" tabIndex={3}></input>
        <br></br><br></br>
        <label for="message">Message: </label>
        <br></br>
        <input name="message" placeholder="Your message here" tabIndex={4}></input>
      </form>
    </div>
  );
}