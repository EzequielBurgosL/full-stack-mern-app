import React from 'react';

import './index.css';

function Filters({ checkboxes, handleInputChange, handleCheckboxChange }) {
  return (
    <>
      <div className="filter-item">
        <label className="filter-label">Company name</label>
        <input
          type="text"
          name="companyName"
          onChange={handleInputChange}
        />
      </div>
      <div className="filter-item">
        <label className="filter-label">Service type</label>
        {Object.keys(checkboxes).map((serviceType) => {
          return (
            <div
              className="checkbox"
              key={serviceType}
            >
              <input
                type="checkbox"
                name={serviceType}
                checked={checkboxes[serviceType]}
                onChange={handleCheckboxChange}
              />
              <span>{serviceType}</span>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default Filters;