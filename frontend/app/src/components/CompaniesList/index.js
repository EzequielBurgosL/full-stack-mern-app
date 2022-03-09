import React from 'react';

import './index.css';

function CompaniesList({ companies }) {
  return (
    <>
      {companies.map(company => {
        return (
          <div key={company.id} className="card">
            <div className="card-image">
              <img src={company.logo} />
            </div>
            <div>
              <h3 className="card-name">{company.name}</h3>
              <p className="card-text">Specialties: {company.specialties.join(', ')}</p>
              <p className="card-text">City: {company.city}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CompaniesList;