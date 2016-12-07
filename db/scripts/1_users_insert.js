db = db.getSiblingDB('courses');
db.users.insertMany
([
  {
    _id: 'Serg',
    username: 'Serg',
    password: 'Password+1',
    roles : ['ADMIN', 'USER']
  },
  {
    _id: 'regular',
    username: 'regular',
    password: 'reg1',
    roles : ['USER']
  },
  {
    _id: '1',
    username: '1',
    password: '1',
    roles : ['ADMIN', 'USER']
  },
  {
    _id: '2',
    username: '2',
    password: '2',
    roles : ['USER']
  }
]);
