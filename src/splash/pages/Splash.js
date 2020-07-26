import React from "react";

import "./Splash.css";

const Splash = () => {
  return (
    <React.Fragment>
      <div className="v-header container">
        <div className="fullscreen-video-wrap">
          <video
            src="https://slowmovideo.s3.amazonaws.com/Fireworks.mp4"
            autoPlay={true}
            loop={true}
          ></video>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content text-md-center">
          <h1>Welcome to SlowMo Video</h1>
          <p>
            We provide Slow Motion Recording at your parties. We aim to capture
            your precious, funny moments with 10 times of details.
          </p>

          <a className="btn" href="/">
            Contact us
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Splash;
