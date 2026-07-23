import React from "react";
const unionTerritories =[
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (NCT)",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];
function States() {
  return (
    <div>
      <p>Choose your Territories</p>
      <select name="" id="">
        <option value="" hidden>---Choose Here----</option>
        {unionTerritories.map((territory) => (
          <option>{territory}</option>
        ))}
      </select>
    </div>
  );
}

export default States;
