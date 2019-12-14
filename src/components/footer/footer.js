import React from "react";

import "../index.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          г. Днепр ул. Симферопольская <br /> +38 063 119 62 09
        </div>
        <div className="footer-log"></div>
      </div>
    );
  }
}

export default Footer;
