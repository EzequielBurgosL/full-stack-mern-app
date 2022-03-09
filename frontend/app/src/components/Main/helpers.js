export function getNameMatchingCompanies(companies = [], searchTerm = '') {
  if (!searchTerm) return companies;

  return companies.filter(company => {
    if (company && typeof company.name === 'string') {
      return company.name.includes(searchTerm);
    } else {
      return false;
    }
  });
}

export function filterCheckedCompanies(companies, checkboxes) {
  const activeCheckboxes = Object.keys(checkboxes).filter(item => checkboxes[item]);

  let result = [];

  companies.forEach(company => {
    for (let i = 0; i < company.specialties.length; i++) {
      const speciality = company.specialties[i];

      if (activeCheckboxes.includes(speciality)) {
        result.push(company);
        break;
      }
    }
  });

  return result;
}

export function getFilteredCompanies(companies, searchTerm, checkboxes) {
  return filterCheckedCompanies(getNameMatchingCompanies(companies, searchTerm), checkboxes);
}