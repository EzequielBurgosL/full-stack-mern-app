import {
  filterCheckedCompanies,
  getNameMatchingCompanies
} from './helpers';

const companies = [
  {
    id: '1',
    name: 'The Boring Company',
    logo: 'http://placekitten.com/300/300',
    specialties: ['excavation'],
    city: 'Los Angeles'
  },
  {
    id: '2',
    name: 'Construction Company',
    logo: 'http://placekitten.com/300/300',
    specialties: ['electrical', 'excavation'],
    city: 'Münich'
  },
  {
    id: '5',
    name: 'Absolut',
    logo: 'http://placekitten.com/300/300',
    specialties: ['plumbing'],
    city: 'Berlin'
  }
];

describe('getNameMatchingCompanies', () => {
  test('should get all companies on empty search term', () => {
    const result = getNameMatchingCompanies(companies, '');
    
    expect(result).toEqual(companies);
  });

  test('should get companies by search term', () => {
    const result = getNameMatchingCompanies(companies, 'Absolut');
    
    expect(result).toEqual([
      {
        id: '5',
        name: 'Absolut',
        logo: 'http://placekitten.com/300/300',
        specialties: ['plumbing'],
        city: 'Berlin'
      }
    ]);
  });

  test('should get companies by search term (uncompleted word)', () => {
    const result = getNameMatchingCompanies(companies, 'Abso');
    
    expect(result).toEqual([
      {
        id: '5',
        name: 'Absolut',
        logo: 'http://placekitten.com/300/300',
        specialties: ['plumbing'],
        city: 'Berlin'
      }
    ]);
  });

  test('should get companies by search term (uncompleted name)', () => {
    const result = getNameMatchingCompanies(companies, 'Company');
    
    expect(result).toEqual([
      {
        id: '1',
        name: 'The Boring Company',
        logo: 'http://placekitten.com/300/300',
        specialties: ['excavation'],
        city: 'Los Angeles'
      },
      {
        id: '2',
        name: 'Construction Company',
        logo: 'http://placekitten.com/300/300',
        specialties: ['electrical', 'excavation'],
        city: 'Münich'
      }
    ]);
  });
}); 

describe('filterCheckedCompanies', () => {
  test('should not get any companies (all filters are inactive)', () => {
    const checkboxes = {
      excavation: false,
      plumbing: false,
      electrical: false
    }
    const result = filterCheckedCompanies(companies, checkboxes);

    expect(result).toEqual([]);
  });

  test('should get companies with plumbing speciality', () => {
    const checkboxes = {
      excavation: false,
      plumbing: true,
      electrical: false
    }
    const result = filterCheckedCompanies(companies, checkboxes);

    expect(result).toEqual([
      {
        id: '5',
        name: 'Absolut',
        logo: 'http://placekitten.com/300/300',
        specialties: [ 'plumbing' ],
        city: 'Berlin'
      }
    ]);
  });

  test('should get companies with excavation speciality', () => {
    const checkboxes = {
      excavation: true,
      plumbing: false,
      electrical: false
    }
    const result = filterCheckedCompanies(companies, checkboxes);

    expect(result).toEqual([
      {
        id: '1',
        name: 'The Boring Company',
        logo: 'http://placekitten.com/300/300',
        specialties: ['excavation'],
        city: 'Los Angeles'
      },
      {
        id: '2',
        name: 'Construction Company',
        logo: 'http://placekitten.com/300/300',
        specialties: ['electrical', 'excavation'],
        city: 'Münich'
      }
    ]);
  });
});