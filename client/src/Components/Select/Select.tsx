import React from "react";

type Props = {
  onSubmit: (value:string) => void
}

const Select: React.FC <Props> = ({ 
  onSubmit
}) => {

  const handleSubmit = event => onSubmit (event.target.value) 

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
