import * as types from "../constants/actionTypes";
import {extractEmbeddedCourse, extractEmbeddedCourseList} from "./HALExtractor";
import courseApi from "../api/courseApi";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

export const loadCoursesSuccess = courses => {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
};

export const createCourseSuccess = course => {
  return {type: types.CREATE_COURSE_SUCCESS, course};
};

export const updateCourseSuccess = course => {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
};

export const deleteCourseSuccess = course => {
  return {type: types.DELETE_COURSE_SUCCESS, course};
};

export const loadCourses = () => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      const extractedCourses = extractEmbeddedCourseList(courses);
      dispatch(loadCoursesSuccess(extractedCourses));
    }).catch(error => {
      console.log(error);
      throw(error);
    });
  };
};

export const saveCourse = course => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      const extractedCourse = extractEmbeddedCourse(savedCourse);
      course.id ? dispatch(updateCourseSuccess(extractedCourse)) :
      dispatch(createCourseSuccess(extractedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      console.log(error);
      throw(error);
    });
  };
};

export const deleteCourse = course => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return courseApi.deleteCourse(course.id).then(courses => {
      dispatch(deleteCourseSuccess(course));
    }).catch((error) => {
      console.log(error);
      throw(error);
    });
  };
};
