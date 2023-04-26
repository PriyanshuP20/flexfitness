import React from "react";

const Video = () => {
  return (
      <div className="home-page">
        <form className="form">
          <div>
            <label>Enter Room Code</label>
            <input type="text" required placeholder="Enter Room Code" />
          </div>
        </form>
      </div>
  );
};
export default Video;