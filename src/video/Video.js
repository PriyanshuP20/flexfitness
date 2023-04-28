import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
// import '../video/video.css';
import '../App.css';

const Video = () => {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();
    const handleFormSubmit = (ev) => {
      ev.preventDefault();
      navigate(`/room/${roomCode}`);
    };
  return (
    <>
    <div class="home_page">
      <div class="left">
        <div class="box">
          <div class="title">
            
          <h1 class="hero-title">Video Chat</h1>
          
          </div>
         < h2 >
          We're excited to have you join us today for your virtual workout. Whether you're at home or on-the-go, our app allows you to connect with your favorite fitness instructors and participate in live classes, all from the comfort of your own space.
          </h2>
          <form onSubmit={handleFormSubmit} className="form">
          <h2 class="hero-title">Enter Room Code :</h2>
            <div class="btn">
              <input value={roomCode} onChange={(e) => setRoomCode (e.target.value) } type="text"required placeholder="Enter Room Code"/>
            </div>
            <div>
          </div>
          
            
          <br/>
          <div class="btn">
            <button type="submit">Enter Room</button>
          </div>
          </form>
          <h4 style={{ color:'green'}}> If you want a access room code become a member.</h4>
        </div>
      </div>

      <div class="right">
      </div>
    </div>
      
      </>
  );
};
export default Video;
