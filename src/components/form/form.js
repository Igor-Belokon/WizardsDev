import React from "react";

import "../index.css";

class Form extends React.Component {
  render() {
    return (
      <div className="form-container">
        <h2 className="cho">Присоединяйся к нам</h2>

        <div className="container">
          <div className="input-container">
            <input className="input-log2" placeholder="Имя"></input>
            <input className="input-log1" placeholder="Email"></input>
          </div>
          <div className="input-container">
            <input className="input-log3" placeholder="Телефон"></input>
            <input className="input-log4" placeholder="Резюме"></input>
          </div>
        </div>
        <button className="form-button">Отправить резюме</button>
      </div>
    );
  }
}

export default Form;
