import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav className="nav">
            <ul>
              <li>
                <a href="/">Main page</a>
              </li>
              <li>
                <a href="/points">Change Points</a>
              </li>
              <li>
                <a href="/about">About money</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
