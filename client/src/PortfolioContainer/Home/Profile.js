import React from "react";
import Typical from "react-typical";
import ScrollService from "../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/iniobongw.jumbo.3">
                <i className="fa fa-facebook-square"></i>
                </a>
                <a href="#">
                <i className="fa fa-google-plus-square"></i>
                </a>
                <a href="https://www.instagram.com/mightywene607/">
                <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC56WuRYWrfN6E_Et2AgTNuQ">
                <i className="fa fa-youtube-square"></i>
                </a>
                <a href="https://twitter.com/nancy_wene">
                <i className="fa fa-twitter"></i>
                </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Nancy Wene Ini</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Website Design 😎",
                    1000,
                    "Web Developer 💻",
                    1000,
                    "Software Installation 📱",
                    1000,
                    "Laptop/Desktop Repairs 🔴",
                    1000,
                    "Data Recovery 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              specialist in System Repairs, Maintenance, Software
                Installation, Website Design etc.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="CURRICULUM VITAE-NANCY" download="Nancy CURRICULUM VITAE-NANCY">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
