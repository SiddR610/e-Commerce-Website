import React from "react";
import "./Item.css";

const Items = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.newPrice}</div>
        <div className="item-price-old">{props.oldPrice}</div>
      </div>
    </div>
  );
};

export default Items;
