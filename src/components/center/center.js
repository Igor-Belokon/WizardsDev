import React from "react";

import "../index.css";

class Center extends React.Component {
  render() {
    return (
      <div className="center">
        {this.props.click ? (
          <div className="">
            <Contact1 />
            <Contact2 />
          </div>
        ) : null}

        <div className="center-map"></div>
        {this.props.click ? (
          <div className="">
            <Contact3 />
            <Contact4 />
          </div>
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
