export const extractEmbeddedCourse = course => {
  if(course) {
    return course.data;
  }
  return "";
};

export const extractEmbeddedCourseList = courses => {
  if(courses) {
    return courses.data._embedded.courses;
  }
  return "";
};

export const extractEmbeddedAuthor = author => {
  if(author) {
    return author.data;
  }
  return "";
};

export const extractEmbeddedAuthorList = authors => {
  if(authors) {
    return authors.data._embedded.authors;
  }
  return "";
};
