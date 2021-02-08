import React from "react";

const Select = (props) => {
    const {handleSubmit} = props

  return (
    <div className="mt-2">
      <label htmlFor="cities">Choose a city: </label>
      <select onChange={handleSubmit} name="city" id="city">
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="New York">New York</option>
        <option value="Tokyo">Tokyo</option>
        <option value="Taipei">Taipei</option>
        <option value="Seoul">Seoul</option>
        <option value="Hong Kong">Hong Kong</option>
      </select>
    </div>
  );
};

export default Select;
