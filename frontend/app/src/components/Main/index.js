import React, { useEffect, useRef, useState } from 'react';
import { getFilteredCompanies } from './helpers';
import { SERVICE_TYPES_CHECKBOX } from '../../constants';
import logic from '../../logic';
import CompaniesList from '../CompaniesList';

import './index.css'
import Filters from '../Filters';

function Main() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [checkboxes, toggleCheckboxes] = useState(SERVICE_TYPES_CHECKBOX);
  const prevCheckboxes = useRef(checkboxes);
  const prevSearchTerm = useRef();
  const allCompanies = useRef([]);

  function handleInputChange(event) {
    prevSearchTerm.current = searchTerm;

    setSearchTerm(event.target.value)
  }

  function handleCheckboxChange(event) {
    prevCheckboxes.current = checkboxes;

    toggleCheckboxes((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  }

  useEffect(async () => {
    if (!allCompanies.current.length) {
      allCompanies.current = await logic.listCompanies();

      setCompanies(allCompanies.current);
    } else if (
      prevCheckboxes.current !== checkboxes ||
      prevSearchTerm.current !== searchTerm
    ) {
      setCompanies(getFilteredCompanies(allCompanies.current, searchTerm, checkboxes));
    }
  }, [checkboxes, searchTerm]);

  return (
    <div className="container">
      <Filters
        checkboxes={checkboxes}
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
      />
      <CompaniesList companies={companies} />
    </div>
  );
}

export default Main;