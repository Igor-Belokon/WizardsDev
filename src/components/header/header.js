import React from "react";
import Center from "../center/center";

import "../index.css";

class Header extends React.Component {
  state = {
    click: false
  };
  onHandleClick = () => {
    if (this.state.click === false) {
      this.setState({ click: true });
    } else {
      this.setState({ click: false });
    }
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md   header">
          <div>
            <a className="navbar-brand" href="#">
              <img
                src="./images/googlelogo_color_92x30dp.png"
                className="d-inline-block align-top log"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="navbar-collapse collapse w-100 order-3 dual-collapse2"
            id="navbarText"
          >
            <ul className="navbar-nav ml-auto">
              <li className=" header-button nav-item active">
                <a className=" header-button nav-link" href="#">
                  О нас <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className=" header-button nav-item">
                <a className=" header-button nav-link" href="#">
                  Новости
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Вакансии
                </a>
                <div
                  className="dropdown-menu dropdown-menu-main"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item header-button" href="#">
                    Front-end developer
                  </a>
                  <a className="dropdown-item header-button" href="#">
                    QA Automation
                  </a>
                  <a className="dropdown-item header-button" href="#">
                    Wordpress developer
                  </a>
                  <a className="dropdown-item header-button" href="#">
                    .NET Developer
                  </a>
                  <a className="dropdown-item header-button" href="#">
                    Java Developer
                  </a>
                </div>
              </li>
              <li className=" header-button nav-item">
                <a
                  className=" header-button nav-link"
                  href="#"
                  onClick={this.onHandleClick}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Center click={this.state.click}></Center>
      </div>
    );
  }
}

export default Header;
