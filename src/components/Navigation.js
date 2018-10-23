import React, { Component } from "react";
import "./navigation.css";


class Navigation extends Component {
  state = {
    viewStyle: false
  };

  // change effect setting based on button text section and show children if any
  effectSetting = (text) => {
    if (text.toLowerCase() === "styles") {
      this.setState(() => ({ viewStyle: true }))
      return { behavior: "smooth", block: "start" };
    } else {
      return { behavior: "smooth" }
    }
  };
  scroll = (e) => {
    const buttonText = e.target.textContent; //get button text based on each section class
    const section = document.querySelector(`.${buttonText.toLowerCase()}`); //get element by class name
    const effect = this.effectSetting(buttonText);
    section.scrollIntoView(effect);
  };
  render() {
    return (
      <div className="nav">
        <h3 className="nav__header">Awesome React Links</h3>
        <div className="nav__main">
          <p className="nav__main--link" onClick={this.scroll}>installation</p>
          <p className="nav__main--link" onClick={this.scroll}>usage</p>
          <p className="nav__main--link" onClick={this.scroll}>styles</p>
          {this.state.viewStyle && <div className="nav__secondary">
            <p className="nav__secondary--link" onClick={this.scroll}>One-Part</p>
            <p className="nav__secondary--link" onClick={this.scroll}>Two-Part</p>
          </div>}
          <p className="nav__main--link" onClick={this.scroll}>Contributors</p>
        </div>
      </div>
    );
  };
};

export default Navigation;