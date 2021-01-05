import React, { Components } from "react";
import Hello from "./components/Hello";

class App extends Components {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Hello text="It works, you make a progress!" />
      </div>
    );
  }
}
