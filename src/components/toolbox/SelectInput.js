import React from "react";

const SelectInput = (
  name,
  label,
  onchange,
  defaultOption,
  value,
  error,
  options
) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onchange}
        className="form-control"
      >
        <option value="">{defaultOption}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
