import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  
  return (
    <div className="card">
      <div className="card-img">
      <img  src={img} alt={title} />
      </div>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <div className="card-reviews">
          {star}
          {star}
          {star}
          {star}
          {star}
          <span className="total-reviews">{reviews}</span>
        </div>
        <div className="card-price">
          <div className="price">
            <del>{prevPrice}</del>{" "}
            <span>${newPrice}.00 </span>
          </div>
          <div className="bag">
            <BsFillBagHeartFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
