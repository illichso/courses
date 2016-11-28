db = db.getSiblingDB('courses');
db.authors.insertMany
([
  {
    _id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    _id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    _id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  }
]);
