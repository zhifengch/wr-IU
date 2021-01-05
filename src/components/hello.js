import React, { Component } from "react";
import reactPng from "../../resources/images/react.png";
class Hello extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text } = this.props;
    return (
      <div style={{ display: "flex", JustifyContent: "center" }}>
        <section>
          <img src={reactPng} alt="react" />
        </section>
        <main>
          <div>{text}</div>
        </main>
      </div>
    );
  }
}

export default Hello;
