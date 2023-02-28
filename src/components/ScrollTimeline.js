import React, { Component } from "react";
import ReactDOM from "react-dom";
import HorizontalTimeline from "react-horizontal-timeline";
import DemoKeyboard from "../javascripts/Timeline"

const VALUES = [" 2001", "2000", "2009","2010","2022"];

class App extends Component {
  state = { value: 0, previous: 0 };

  changeIndexFromSlide = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: "100%", height: "100px", margin: "0 auto" }}>
          <HorizontalTimeline
          
            styles={{
             
              foreground: "red",
               outline: "black",
              
            }}
            index={this.state.value}
            indexClick={index => {
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
