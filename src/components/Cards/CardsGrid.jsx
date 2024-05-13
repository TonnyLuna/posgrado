import React from "react";
import CardView from "./CardView";

const CardsGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
      {data.map((item, index) => (
        <CardView
          key={index}
          image={item.image}
          name={item.name}
          semblanza={item.semblanza}
        />
      ))}
    </div>
  );
};

export default CardsGrid;