#!/bin/bash

use courses;

db.createCollection('users');

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
  }
]);