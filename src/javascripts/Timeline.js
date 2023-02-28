import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class DemoKeyboard extends Component {
  sendIndex = index => {
    this.props.outputIndex(index);
  };
  render() {
    return (
      <BindKeyboardSwipeableViews
        index={this.props.inputIndex}
        onChangeIndex={index => {
          this.sendIndex(index);
        }}
        enableMouseEvents
      >
        <div className="slide1">
          <div className="h-72 space-x-2 flex border-2 border-slate-600 ">
              <div className= "w-2/3 bg-blue-400">
              <img className="h-72 w-full"src="https://i1-vnexpress.vnecdn.net/2023/02/22/1-jfif-1677053503-2557-1677057591.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=ilPqV3m9XMp7XRSHf-pWFg" alt="" />
              
              </div>
              <div className= "w-1/3 bg-slate-100">
                <h1 className="font-bold"> Nga lộ dấu hiệu hụt hơi trong chiến dịch tấn công mới ở Ukraine</h1>
                <p>Chiến dịch tấn công mới của Nga ở miền đông Ukraine bộc lộ những hạn chế về chiến thuật và chất lượng huấn luyện, khiến Moskva khó tạo đột phá. </p>
              </div>
          </div>
        </div>
        <div className="slide2">
        <div className="h-72 space-x-2 flex border-2 border-slate-600 ">
              <div className= "w-2/3 bg-blue-400">
              <img className="h-72 w-full"src="https://i1-vnexpress.vnecdn.net/2023/02/22/1-jfif-1677053503-2557-1677057591.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=ilPqV3m9XMp7XRSHf-pWFg" alt="" />
              
              </div>
              <div className= "w-1/3 bg-slate-100">
                <h1 className="font-bold"> Nga lộ dấu hiệu hụt hơi trong chiến dịch tấn công mới ở Ukraine</h1>
                <p>Chiến dịch tấn công mới của Nga ở miền đông Ukraine bộc lộ những hạn chế về chiến thuật và chất lượng huấn luyện, khiến Moskva khó tạo đột phá. </p>
              </div>
          </div>
        </div>
        <div className="slide3">
        <div className="h-72 space-x-2 flex border-2 border-slate-600 ">
              <div className= "w-2/3 bg-blue-400">
              <img className="h-72 w-full"src="https://i1-vnexpress.vnecdn.net/2023/02/22/1-jfif-1677053503-2557-1677057591.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=ilPqV3m9XMp7XRSHf-pWFg" alt="" />
              
              </div>
              <div className= "w-1/3 bg-slate-100">
                <h1 className="font-bold"> Nga lộ dấu hiệu hụt hơi trong chiến dịch tấn công mới ở Ukraine</h1>
                <p>Chiến dịch tấn công mới của Nga ở miền đông Ukraine bộc lộ những hạn chế về chiến thuật và chất lượng huấn luyện, khiến Moskva khó tạo đột phá. </p>
              </div>
          </div>
        </div>
        <div className="slide4">
        <div className="h-72 space-x-2 flex border-2 border-slate-600 ">
              <div className= "w-2/3 bg-blue-400">
              <img className="h-72 w-full"src="https://i1-vnexpress.vnecdn.net/2023/02/22/1-jfif-1677053503-2557-1677057591.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=ilPqV3m9XMp7XRSHf-pWFg" alt="" />
              
              </div>
              <div className= "w-1/3 bg-slate-100">
                <h1 className="font-bold"> Nga lộ dấu hiệu hụt hơi trong chiến dịch tấn công mới ở Ukraine</h1>
                <p>Chiến dịch tấn công mới của Nga ở miền đông Ukraine bộc lộ những hạn chế về chiến thuật và chất lượng huấn luyện, khiến Moskva khó tạo đột phá. </p>
              </div>
          </div>
        </div>
        <div className="slide5">
        <div className="h-72 space-x-2 flex border-2 border-slate-600 ">
              <div className= "w-2/3 bg-blue-400">
              <img className="h-72 w-full"src="https://i1-vnexpress.vnecdn.net/2023/02/22/1-jfif-1677053503-2557-1677057591.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=ilPqV3m9XMp7XRSHf-pWFg" alt="" />
              
              </div>
              <div className= "w-1/3 bg-slate-100">
                <h1 className="font-bold"> Nga lộ dấu hiệu hụt hơi trong chiến dịch tấn công mới ở Ukraine</h1>
                <p>Chiến dịch tấn công mới của Nga ở miền đông Ukraine bộc lộ những hạn chế về chiến thuật và chất lượng huấn luyện, khiến Moskva khó tạo đột phá. </p>
              </div>
          </div>
        </div>
       </BindKeyboardSwipeableViews>
    );
  }
}

export default DemoKeyboard;
