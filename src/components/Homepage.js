import React, { Component } from "react";
import "./style.css";

class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrap">
          <div className="instructions">
            <div className="first">
              <h1>Oreo Cheesecake Bot</h1>
              <p>A4 Bahasa Alamiah</p>
            </div>
          </div>
          <div className="staff">
            <div className="member">
              <div
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://image.flaticon.com/icons/png/128/1864/1864509.png')",
                }}
              ></div>
              <div className="name">
                <p>Mohamad Muqiit Faturrahman</p>
                <p>15-2018-016</p>
              </div>
            </div>
            <div className="member">
              <div
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://image.flaticon.com/icons/png/128/1864/1864518.png')",
                }}
              ></div>
              <div className="name">
                <p>Rizkika Siti Syifa</p>
                <p>15-2018-030</p>
              </div>
            </div>
            <div className="member">
              <div
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://image.flaticon.com/icons/png/128/1864/1864518.png')",
                }}
              ></div>
              <div className="name">
                <p>Siti Asy Syifa</p>
                <p>15-2018-032</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
