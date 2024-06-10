import React from "react";

function GenderCheckbox({onCheckboxChange, selectedGender}) {
  return (
    <div className="flex space-x-4">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer flex items-center ${selectedGender === "male" ? "selected" : ""}`}>
          <span className="label-text block text-sm font-medium leading-6 text-black">Male</span>
          <input
          id="male"
            type="checkbox"
            className="checkbox border-0 ring-1 ring-inset ring-blue-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 rounded bg-gray-200"
            checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer flex items-center ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="label-text block text-sm font-medium leading-6 text-black">Female</span>
          <input
            id="female"
            type="checkbox"
            className="checkbox border-0 ring-1 ring-inset ring-blue-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 rounded bg-gray-200"
            checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
