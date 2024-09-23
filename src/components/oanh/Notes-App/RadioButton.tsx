import * as React from 'react';

export const RadioButton = ({ label, Checked, onChange }) => {
  return (
    <label className="flex cursor-pointer items-center space-x-2">
      <input
        type="radio"
        name="category"
        checked={Checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span className={`text-lg ${Checked ? 'font-bold text-blue-600' : 'text-gray-600'}`}>
        {label}
      </span>
    </label>
  );
};
