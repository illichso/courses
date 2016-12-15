import axios from "axios";

class CourseApi {

  static getAllCourses() {
    return axios.get("/api/courses");
  }

  static saveCourse(course) {
    if(course.id) {
      return axios.put(`/api/courses/${course.id}`, course);
    } else {
      return axios.post("/api/courses", course);
    }
  }

  static deleteCourse(courseId) {
    return axios.delete(`/api/courses/${courseId}`);
  }
}

export default CourseApi;
