import React from "react";

function GenderCheckbox() {
  return (
    <div className="flex space-x-4">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer flex items-center">
          <span className="label-text block text-sm font-medium leading-6 text-black">Male</span>
          <input
            type="checkbox"
            className="checkbox border-0 ring-1 ring-inset ring-blue-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 rounded bg-gray-200"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer flex items-center">
          <span className="label-text block text-sm font-medium leading-6 text-black">Female</span>
          <input
            type="checkbox"
            className="checkbox border-0 ring-1 ring-inset ring-blue-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 rounded bg-gray-200"
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
