import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className="name-project"> 2022 &copy; Web dev Roma Sh. </div>
        <div className="map-project">
          <div>Site map</div>
          <div>Google Sitemap</div>
        </div>
        <div className="others-project">
          <p>Contacts</p>
          <p>Garranties</p>
          <p>About service</p>
          <p>Return offer</p>
          <p>Submit</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
