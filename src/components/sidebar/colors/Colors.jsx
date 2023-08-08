import React from "react";
import "./Colors.css";
import Input from "../../Input";

const Colors = ({handleChange}) => {
  return (
    <div className="mr">
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} value="" type="radio" name="test3" />
        <span className="checkmark all"></span>All
      </label>
      <Input handleChange={handleChange} value="black" color="black" title="Black" name="test3" />
      <Input handleChange={handleChange} value="blue" color="blue" title="Blue" name="test3" />
      <Input handleChange={handleChange} value="red" color="red" title="Red" name="test3" />
      <Input handleChange={handleChange} value="green" color="green" title="Green" name="test3" />
      <label className="sidebar-label-container">
        <input onChange={handleChange} value="white" type="radio" name="test3" />
        <span className="checkmark" style={{ border: "2px solid #ddd"}}></span>White
      </label>
    </div>
  );
};

export default Colors;
