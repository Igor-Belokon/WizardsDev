import React from "react";

import "../index.css";

class Center extends React.Component {
  state = {
    showPopup: false
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className="center">
        {this.props.click ? (
          <div className="">
            <Contact1 />
            <Contact2 />
          </div>
        ) : null}

        <div className="center-map">
          <div
            className="showPopup"
            onClick={this.togglePopup.bind(this)}
          ></div>
        </div>
        {this.props.click ? (
          <div className="">
            <Contact3 />
            <Contact4 />
          </div>
        ) : null}
        {this.state.showPopup ? (
          <Popup closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default Center;

class Contact1 extends React.Component {
  render() {
    return (
      <div className="contact1">
        <div className="con1"></div>
        <div className="con-text1">Опыт работы</div>
        <div className="con-text2">
          Опыт работы с передовыми технологиями разработки сложных и интересных
          продуктов и уникальной стратегией тестирования, обеспечивающей
          бесперебойную работу продукта.
        </div>
      </div>
    );
  }
}
class Contact2 extends React.Component {
  render() {
    return (
      <div className="contact2">
        <div className="con2"></div>
        <div className="con-text1-1">Карьерный рост</div>
        <div className="con-text2-1">
          Непременный карьерный рост, профессиональное развитие и общение с
          ведущими экспертами Massachusetts Institute of Technology.
        </div>
      </div>
    );
  }
}
class Contact3 extends React.Component {
  render() {
    return (
      <div className="contact3">
        <div className="con3"></div>
        <div className="con-text1-2">Участие в крупных проектах</div>
        <div className="con-text2-2">
          Прямое и косвенное участие в создании крупных проектов в соответствии
          с международными стандартами эксплуатации внедрения IT решений.
        </div>
      </div>
    );
  }
}
class Contact4 extends React.Component {
  render() {
    return (
      <div className="contact4">
        <div className="con4"></div>
        <div className="con-text1-3">Полная интеграция</div>
        <div className="con-text2-3">
          Полная интеграция в работу наших компаний-партнеров, крупнейших
          корпораций и лидеров мировых рынков отрасли финансовых технологий.
        </div>
      </div>
    );
  }
}
class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="close-popup" onClick={this.props.closePopup}>
            X
          </div>
          <div className="popupName">Контакты</div>
          <div className="popup-text">
            г. Днепр ул. Симферопольская +38 063 119 62 09
          </div>
          <div className="popup-log"></div>
        </div>
      </div>
    );
  }
}
