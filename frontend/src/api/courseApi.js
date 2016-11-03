import axios from 'axios';

class CourseApi {

  static getAllCourses() {
    return axios.get('/api/courses');
  }

  static save(author) {
    if(author.id) {
      return axios.put(`/api/courses/${author.id}`, author);
    } else {
      return axios.post('/api/courses', author);
    }
  }

  static deleteCourse(courseId) {
    return axios.put(`/api/courses/${courseId}`, {});
  }
}

export default CourseApi;
