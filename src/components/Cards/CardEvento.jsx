import React from "react";

const CardEvento = ({ title }) => {
  return (
    <div className="flex cursor-pointer w-5/6 m-4 h-32 bg-blue-900 rounded-lg flex-col justify-center items-center border-4 border-blue-950">
      <h1 className="text-xl text-white font-sans font-semibold">{title}</h1>
    </div>
  );
};

export default CardEvento;
