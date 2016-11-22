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
db.courses.insertMany
([
  {
    _id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    _id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    _id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    _id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    _id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
]);
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
