import React, { Component } from "react";
import ReactDOM from "react-dom";
import HorizontalTimeline from "react-horizontal-timeline";
import DemoKeyboard from "../javascripts/Timeline";

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
            color: "rgb(101,171,237)",
          }}
        >
          <HorizontalTimeline
            getLabel={function (date) {
              return date.slice(0, 7);
            }}
            styles={{
              foreground: "rgb(101,171,250)",
              outline: "gray",
            }}
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={[
              "Jan 1",
              "Feb 3",
              "Mar 3",
              "May 5",
              "July 7",
              "Jul 15",
              "Sep 29",
              "Nov 15",
            ]}
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
