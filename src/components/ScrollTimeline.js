import React, { Component } from "react";
import ReactDOM from "react-dom";
import HorizontalTimeline from "react-horizontal-timeline";
import DemoKeyboard from "../javascripts/Timeline";

const VALUES = [
  "Jan 1 2023",
  "Feb 3 2023",
  "Mar 3 2023",
  "May 5 2023",
  "July 7 2023",
  "Jul 15 2023",
  "Sep 29 2023",
  "Nov 15 2023",
];

class App extends Component {
  state = { value: 0, previous: 0 };

  changeIndexFromSlide = (index) => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div
          style={{
            width: "100%",
            height: "120px",
            margin: "0 auto",          
            fontSize: "14px",
            color:"blue"
          }}
        >
          <HorizontalTimeline 
            styles={{
              foreground: "blue",
              outline: "gray",
            }}
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES}
          />
        </div>
        <div className="">
          <DemoKeyboard
            inputIndex={this.state.value}
            outputIndex={this.changeIndexFromSlide}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
