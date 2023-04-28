import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import '../video/video.css';

const Video = () => {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();
    const handleFormSubmit = (ev) => {
      ev.preventDefault();
      navigate(`/room/${roomCode}`);
    };
  return (
    <>
    <div className="home-page">
    <form onSubmit={handleFormSubmit} className="form">
      <div>
        <label>Enter Room Code : </label>
        <input value={roomCode} onChange={(e) => setRoomCode (e.target.value) } type="text"required placeholder="Enter Room Code"/>
     </div>
     
      <button type="submit" style={{width:'10%',padding:'2px',color:'blue',backgroundColor:'yellow'}}>Enter Room</button>
      </form>
      </div>
      <h4 style={{textAlign:'center'}}> if you want to access room code become a member.</h4>
      </>
  );
};
export default Video;
