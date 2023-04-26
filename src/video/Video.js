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
     
      <button type="submit">Enter Room</button>
      </form>
      </div>

      </>
  );
};
export default Video;
