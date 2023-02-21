import React from "react";
export default function News({ title, topic, image, content, time, id }) {
  // var a=1;
  // const num=(a)=> a+1;
  return (
    <div className=" flex h-[200px] w-full bg-slate-100 py-3 border-t border-slate-300 ">
      {" "}
      {/* bỏ absolute*/}
      <div className="ml-2 w-[250px]">
        <img className=" w-full h-full" src={image}></img>
      </div>
      <div className="flex flex-col justify-between w-[500px] mx-3">
        <h1 className="font-bold text-xl">{title}</h1>
        <div>
          <h3 className="inline font-semibold text-sm"> {topic} - </h3>
          <h3 className="inline text-sm text-opacity-75 text-slate-600">
            {" "}
            {time}{" "}
          </h3>
        </div>
        <p className=" text-sm ">
          Mới đây, Xoài Non và Xemesis đã chia sẻ những khoảnh khắc dễ thương và
          bất ngờ, kỷ niệm 5 năm bên nhau.
        </p>
      </div>
    </div>
  );
}
