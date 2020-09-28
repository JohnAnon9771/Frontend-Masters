import React, { useState } from 'react';

function useDropdown(label, initialState, options) {
  const [state, setState] = useState(initialState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
}

export default useDropdown;
