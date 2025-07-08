import React from "react";

function getImg(n: number) {
  return (
    <img
      src={`https://picsum.photos/470?random=${n}`}
      className="w-full h-full object-cover"
    />
  );
}

function First() {
  return (
    <div className="w-full max-w-[956px] flex gap-2 items-center rounded-2xl overflow-hidden">
      <div className="w-[25%] h-[470px] rounded-2xl overflow-hidden">
        <div className="w-[200%] h-full -translate-x-1/2">{getImg(1)}</div>
      </div>
      <div className="w-[50%] h-[470px] overflow-hidden rounded-2xl">
        {getImg(2)}
      </div>
      <div className="w-[25%] h-[470px] rounded-2xl overflow-hidden">
        <div className="w-[200%] h-full">{getImg(3)}</div>
      </div>
    </div>
  );
}

export default First;
