import "../css/Home.css";
import React from "react";
const { Component, Children, PropTypes } = React;

class SplitText extends Component {
  render() {
    return (
      <span aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function (char, index) {
          let style = { "animation-delay": 0.5 + index / 10 + "s" };
          return (
            <span aria-hidden="true" key={index} style={style}>
              {char}
            </span>
          );
        })}
      </span>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="homeWrapper">
        <div className="nameWrapper">
          <h1 className="nameH1">
            <SplitText copy="Grace Pan" role="heading" />
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
